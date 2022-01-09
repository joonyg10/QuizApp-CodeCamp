import { css, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root { 
    --color-primary: hsl(217, 90%, 61%);
    --color-primary-700: hsl(217, 90%, 75%);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body  {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }

  ul {
    list-style: none;
  }
`;

export const flex = css<{
  justify?: "center";
  align?: "flex-start" | "flex-end";
}>`
  display: flex;
  align-items: center;
  gap: var(--gap, 0.5em);
`;
