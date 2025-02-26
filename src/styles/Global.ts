import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
    }
  }

  body{
    background: ${({ theme }) => theme.baseBackground};
    color: ${({ theme }) => theme.baseTitle};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
      font : 400 1rem Nunito, sans-serif 
  }

`;
