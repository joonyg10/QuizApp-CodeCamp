import styled from "styled-components";
import { ANSWER_STATE } from "../../types/game.type";

interface IRadioSelector {
  iterables: string[];
  selected: string;
  setSelected: (newSelected: string) => void;
  isCorrect?: ANSWER_STATE;
}

const RadioSelector = (props: IRadioSelector) => {
  const { iterables, selected, setSelected, isCorrect } = props;
  return (
    <RadioSelectorBox isCorrect={isCorrect}>
      {iterables.map((item: string, idx) => (
        <li key={item}>
          <input
            type="radio"
            id={`item${item}`}
            checked={selected === item}
            onChange={() => setSelected(item)}
            disabled={isCorrect !== ANSWER_STATE.YET_SUBMIT}
          />
          <label htmlFor={`item${item}`}>{item}</label>
        </li>
      ))}
    </RadioSelectorBox>
  );
};

export default RadioSelector;

const RadioSelectorBox = styled.ul<{ isCorrect?: ANSWER_STATE }>`
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding: 1em 2em;

    input {
      background: none;
      outline: none;

      &:checked + label {
        color: ${({ isCorrect }) =>
          isCorrect === ANSWER_STATE.IN_CORRECT && "red"};

        font-weight: bold;
      }

      & + label {
        padding-left: 2em;
        cursor: pointer;
      }
    }

    & + & {
      margin-top: 1rem;
    }
  }
`;
