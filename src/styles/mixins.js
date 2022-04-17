import { css } from "styled-components";

const mixins = {
  lightSelection: css`
    &::selection {
      background-color: var(--white) !important;
      color: var(--primary) !important;
    }
  `,
};

export default mixins;
