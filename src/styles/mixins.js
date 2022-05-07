import { css } from "styled-components";

const mixins = {
  lightMode: css`
    --main-bg: var(--bg-light);
    --text-color: var(--black);
    --text-linear-gradient: var(--dark-text-liner-gradient);
    --svg-stroke: var(--black);
    --svg-strop-color: var(--black);
  `,

  darkMode: css`
    --main-bg: var(--bg-dark);
    --text-color: var(--white);
    --text-linear-gradient: var(--light-text-liner-gradient);
    --svg-stroke: var(--grey-white);
    --svg-strop-color: var(--pure-white);
  `,

  lightSelection: css`
    &::selection {
      background-color: var(--white) !important;
      color: var(--primary) !important;
    }
  `,
};

export default mixins;
