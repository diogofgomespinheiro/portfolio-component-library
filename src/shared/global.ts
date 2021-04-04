import { createGlobalStyle, css } from 'styled-components';
import { typography } from './styles';

export const bodyStyles = css`
  font-family: ${typography.type.primary};

  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    font-family: ${typography.type.primary};
  }
`;

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`;
