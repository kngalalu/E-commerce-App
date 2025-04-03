import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background: #f4f4f4;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .btn {
    display: inline-block;
    background: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin: 5px;
    border-radius: 5px;

    &:hover {
      background: #555;
    }
  }
`;

export default GlobalStyles;