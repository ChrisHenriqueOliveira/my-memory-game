import { createGlobalStyle } from 'styled-components';

import bg from '../assets/bg.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    color: #f4ede8;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select, textarea {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button, a {
    cursor: pointer;
  }
`;
