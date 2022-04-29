import { css } from "styled-components";

const TransitionStyles = css`
  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }

  /* Fade up */
  .fadeup-enter {
    opacity: 0.01 !important;
    transform: translateY(20px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  .fadeup-enter-active {
    opacity: 1 !important;
    transform: translateY(0px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  .fadeup-enter-done {
    opacity: 1 !important;
  }

  /* Fade down */
  .fadedown-enter {
    opacity: 0.01 !important;
    transform: translateY(-20px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  .fadedown-enter-active {
    opacity: 1 !important;
    transform: translateY(0px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  .fadedown-enter-done {
    opacity: 1 !important;
  }
`;

export default TransitionStyles;
