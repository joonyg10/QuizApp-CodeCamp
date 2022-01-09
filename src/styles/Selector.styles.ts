import styled from "styled-components";

export const Selector = styled.li`
  display: flex;
  align-items: center;
  padding: 1em 2em;

  input {
    background: none;
    outline: none;

    &:checked + label {
      font-weight: bold;
    }
  }
`;
