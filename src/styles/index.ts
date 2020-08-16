import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

library.add(faCheck, faCircle, faAngleRight);

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
