import { createGlobalStyle } from 'styled-components';

const fonts = { size: '14px', family: 'sans-serif' };

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body, h1, h2 {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
      font-family: ${fonts.family};
      padding: 0;
      font-weight: normal;
      font-size:${fonts.size};
  }
  #root {
    height: 100%;
  }
`;
