import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
  
  ${variables}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {  
    line-height: var(--line-height-default);
    font-weight: var(--font-weight-default);
    overflow-x: hidden;
    box-sizing: inherit;
    color: var(--white);
    font-size: var(--font-18);
    font-family: 'Rubik', sans-serif;
  }

  /* Scroll bar */
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--white); 
    border-radius: 1rem;
    transition: var(--transition);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-light); 
  }

  /* Selection */
  ::selection {
    background-color: var(--primary-dark);
    color: var(--white);
  }

  section {
    max-width: 100rem;
    margin: 0 auto;
  }

  /* Buttons */
  .btn, .btn:link, .btn:visited {
    display: inline-block;
    text-decoration: none;
    padding: 1.6rem 3.2rem;
    border: none;
    border-radius: var(--border-radius-default);
    cursor: pointer;
    font-size: var(--font-20);
    transition: var(--transition);
    font-weight: 600;
  }

  .btn--full {
    background-color: var(--primary);
    color: var(--white);

    &:hover {
      background-color: var(--primary-dark);
    }
  }

  /* Animations */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  } 
`;

export default GlobalStyle;
