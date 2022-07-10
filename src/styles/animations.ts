import { css } from "styled-components";

const animations = css`
  /* Animations */
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

  @keyframes animateBgAnim {
    100% {
      opacity: 1;
    }
  }
`;

export default animations;
