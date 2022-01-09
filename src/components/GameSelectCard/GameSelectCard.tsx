import styled from "styled-components";
import { Button } from "../../styles/Button.styles";
import { Card } from "../../styles/Card.styles";
import { DIFFICULTY } from "../../types/question.type";

interface IGameSelectCard {
  currDiff: DIFFICULTY;
  setDifficulty: (difficulty: DIFFICULTY) => void;
  startQuiz: () => void;
}

const GameSelectCard = (props: IGameSelectCard) => {
  const { currDiff, setDifficulty, startQuiz } = props;

  return (
    <GameSelectCardBox>
      <h2>Select Difficulty</h2>
      <ul>
        {Object.values(DIFFICULTY).map((difficulty) => (
          <GameSelectRadioInput key={difficulty}>
            <input
              id={`difficulty${difficulty}`}
              type="radio"
              checked={currDiff === difficulty}
              onChange={() => setDifficulty(difficulty)}
            />
            <label htmlFor={`difficulty${difficulty}`}>{difficulty}</label>
          </GameSelectRadioInput>
        ))}
      </ul>
      <Button onClick={startQuiz}>Start Game</Button>
    </GameSelectCardBox>
  );
};

export default GameSelectCard;

const GameSelectCardBox = styled(Card)`
  h2 {
    font-size: 2rem;
  }
`;

const GameSelectRadioInput = styled.li`
  display: flex;
  align-items: center;
  padding: 1em 2em;

  input {
    background: none;
    outline: none;

    &:checked + label {
      font-weight: bold;
    }

    & + label {
      padding-left: 2em;
      border: none;
      cursor: pointer;
    }
  }

  & + & {
    margin-top: 1rem;
  }
`;
