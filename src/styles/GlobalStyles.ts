import { createGlobalStyle } from "styled-components";
import animations from "./animations";
import TransitionStyles from "./transitionTyles";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`  
  ${variables}


  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-margin-top: 10rem;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;

    @media screen and (${({ theme }) => theme.bp.desktopS}) {
    }

    @media screen and (${({ theme }) => theme.bp.tabletXS}) {

    }

    @media screen and (${({ theme }) => theme.bp.tabletL}) {
      font-size: 56.25%;
    }

    @media screen and (${({ theme }) => theme.bp.mobileL}) {
      font-size: 50%;
    }

    @media screen and (${({ theme }) => theme.bp.mobileM}) {

    }
  }

  body {  
    line-height: var(--line-height-default);
    font-weight: var(--font-weight-default);
    overflow-x: hidden;
    box-sizing: inherit;
    font-size: var(--font-18);
    font-family: 'Rubik', sans-serif;
  }

  a {
    text-decoration: none;
  }

  /* Scroll bar */
  /* width */
  body::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  body::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  /* Handle */
  body::-webkit-scrollbar-thumb {
    background: var(--second-text-color); 
    border-radius: 1rem;
    transition: var(--transition);
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

   ${animations}

   ${TransitionStyles}
`;

export default GlobalStyle;
