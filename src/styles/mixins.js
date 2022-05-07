import { css } from "styled-components";

const mixins = {
  lightMode: css`
    --main-bg: var(--bg-light);
    --text-color: var(--black);
    --text-linear-gradient: var(--dark-text-liner-gradient);
  `,

  darkMode: css`
    --main-bg: var(--bg-dark);
    --text-color: var(--white);
    --text-linear-gradient: var(--light-text-liner-gradient);
  `,

  lightSelection: css`
    &::selection {
      background-color: var(--white) !important;
      color: var(--primary) !important;
    }
  `,
};

export default mixins;
