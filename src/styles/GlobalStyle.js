import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, 
  *::before, 
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
    min-height: 100vh;
  }
`;
