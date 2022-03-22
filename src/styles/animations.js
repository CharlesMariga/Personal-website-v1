import { css } from "styled-components";

const animations = css`
  @keyframes animateLogo {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes identifier {
  }

  @keyframes fillIt {
    100% {
      fill: var(--primary);
    }
  }
`;

export default animations;
