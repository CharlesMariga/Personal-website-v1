import { css } from "styled-components";

const animations = css`
  /* Animations */
  .fadeup-enter {
    opacity: 0 !important;
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

  @keyframes animateLogo {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fillIt {
    100% {
      fill: var(--primary);
    }
  }
`;

export default animations;
