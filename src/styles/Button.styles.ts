import styled from "styled-components";

export const Button = styled.button`
  padding: 1em 2em;
  background: var(--color-primary);
  border: none;
  border-radius: 2em;
  outline: none;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: all 250ms ease-in;

  &:hover {
    background: var(--color-primary-700);
  }
`;
