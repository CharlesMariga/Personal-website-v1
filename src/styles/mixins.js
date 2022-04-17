import { css } from "styled-components";

export const lightSelection = css`
  &::selection {
    background-color: var(--white) !important;
    color: var(--primary) !important;
  }
`;
