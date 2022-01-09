import React, { useState, useEffect } from "react";
import { QuestionCard, GameSelectCard, GameOverCard } from "./components";
import { GlobalStyles } from "./styles/global.styles";
import { fetchQuestion } from "./services/fetchQuestion";
import { QuestionType, DIFFICULTY } from "./types/question.type";
import { GAMESTATE } from "./types/game.type";

function App() {
  const [questions, setQuestions] = useState<QuestionType[]>(
    [] as QuestionType[]
  );
  const [gameStatus, setGameStatus] = useState<GAMESTATE>(GAMESTATE.GAMESTART);
  const [difficulty, setDifficulty] = useState<DIFFICULTY>(DIFFICULTY.EASY);
  const [score, setScore] = useState<number>(0);

  const startQuiz = () => {
    setGameStatus(GAMESTATE.GAMING);
  };

  useEffect(() => {
    if (gameStatus !== GAMESTATE.GAMING) return;
    const getQuestions = async () => {
      await fetchQuestion(difficulty, 10).then((qeustions) =>
        setQuestions(qeustions)
      );
    };
    getQuestions();
  }, [gameStatus]);

  return (
    <>
      <GlobalStyles />
      {
        {
          [GAMESTATE.GAMESTART]: (
            <GameSelectCard
              currDiff={difficulty}
              setDifficulty={setDifficulty}
              startQuiz={startQuiz}
            />
          ),
          [GAMESTATE.GAMING]: (
            <QuestionCard
              questions={questions}
              setGameStatus={setGameStatus}
              score={score}
            />
          ),
          [GAMESTATE.GAMEOVER]: (
            <GameOverCard score={score} setGameStatus={setGameStatus} />
          ),
        }[gameStatus]
      }
    </>
  );
}

export default App;
