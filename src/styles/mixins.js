import { css } from "styled-components";

const mixins = {
  lightMode: css`
    --main-bg: var(--bg-light);
    --text-color: var(--black);
    --text-linear-gradient: var(--to-right-dark-text-linear-gradient);
    --svg-stroke: var(--black);
    --svg-strop-color: var(--black);
    --section-heading-linear-gradient: var(--to-left-dark-text-linear-gradient);
    --card-background-color: var(--bg-white-light);
    --second-text-color: var(--Secondary-light);
  `,

  darkMode: css`
    --main-bg: var(--bg-dark);
    --text-color: var(--white);
    --text-linear-gradient: var(--to-right-light-text-linear-gradient);
    --svg-stroke: var(--grey-white);
    --svg-strop-color: var(--pure-white);
    --section-heading-linear-gradient: var(--to-left-light-text-linear-gradient);
    --card-background-color: var(--bg-primary-light);
    --second-text-color: var(--primary-light);
  `,

  lightSelection: css`
    &::selection {
      background-color: var(--white) !important;
      color: var(--primary) !important;
    }
  `,
};

export default mixins;
