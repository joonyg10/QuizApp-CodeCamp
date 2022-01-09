import React, { useState } from "react";
import styled from "styled-components";
import RadioSelector from "../RadioSelector/RadioSelector";
import { Card } from "../../styles/Card.styles";
import { Button } from "../../styles/Button.styles";
import { QuestionType } from "../../types/question.type";
import { GAMESTATE, ANSWER_STATE } from "../../types/game.type";

interface IQuestionCard {
  questions: QuestionType[];
  setGameStatus: (gameStatus: GAMESTATE) => void;
  score: number;
}

const QuestionCard = (props: IQuestionCard) => {
  const { questions, setGameStatus, score } = props;
  const [currQuesIdx, setCurrQuesIdx] = useState<number>(0);
  const [selected, setSelected] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<ANSWER_STATE>(
    ANSWER_STATE.YET_SUBMIT
  );

  const currQuestion: QuestionType = questions[currQuesIdx];

  const checkAndSubmitAnswer = () => {
    const isUserCorrect = selected === currQuestion.correct_answer;
    setIsCorrect(
      isUserCorrect ? ANSWER_STATE.CORRECT : ANSWER_STATE.IN_CORRECT
    );
  };

  const getNextQuestion = () => {
    if (currQuesIdx === 9) return setGameStatus(GAMESTATE.GAMEOVER);
    setCurrQuesIdx((prevIdx: number) => prevIdx + 1);
    setIsCorrect(ANSWER_STATE.YET_SUBMIT);
  };

  if (!questions.length) return <h2>loading...</h2>;
  return (
    <QuestionCardBox>
      <RadioSelector
        iterables={currQuestion.questions}
        selected={selected}
        setSelected={setSelected}
        isCorrect={isCorrect}
      />
      <header className="question__header">
        <h3>#{currQuesIdx}</h3>
        <h3>{score / 10}</h3>
        <p>{currQuestion.question}</p>
      </header>
      <section className="question__btns">
        <Button onClick={checkAndSubmitAnswer}>Hand Out</Button>
        <Button onClick={getNextQuestion}>Next Question</Button>
      </section>
    </QuestionCardBox>
  );
};

export default QuestionCard;

const QuestionCardBox = styled(Card)`
  .question__header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > *:first-child {
      justify-self: start;
    }
    & > p {
      grid-column: span 2;
    }
  }
  .question__btns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;
  }
`;
