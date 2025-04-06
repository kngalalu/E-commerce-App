import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Modern CSS reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base typography */
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
  }

  /* Responsive base font size */
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  /* Links */
  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease;
    
    &:hover {
      color: #4a6bff;
    }
  }

  /* Buttons */
  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: all 0.2s ease;
  }

  /* Form elements */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Utility classes */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Animation for loading states */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export default GlobalStyles;