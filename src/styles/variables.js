import { css } from "styled-components";

const variables = css`
  :root {
    --white: #fae5d3;
    --primary-light: #f0b27a;
    --primary: #e67e22;
    --primary-dark: #cf711f;
    --primary-dark-2: #5c320e;
    --black: #16171b;
    --grey-white: #fbfbfb;
    --pure-white: #ffffff;
    --Secondary-light: #cf711f;

    --to-right-light-text-linear-gradient: linear-gradient(
      to right,
      var(--white),
      var(--primary)
    );
    --to-left-light-text-linear-gradient: linear-gradient(
      to left,
      var(--white),
      var(--primary)
    );
    --to-right-dark-text-linear-gradient: linear-gradient(
      to right,
      var(--primary-dark-2),
      var(--primary)
    );
    --to-left-dark-text-linear-gradient: linear-gradient(
      to left,
      var(--primary-dark-2),
      var(--primary)
    );

    /* Bg colors */
    --bg-dark: #16171b;
    --bg-dark-light: rgba(22, 23, 27, 0.5);
    --bg-light: #f6f8fa;
    --bg-white-light: rgba(255, 255, 255, 0.7);
    --bg-primary-light: rgba(240, 178, 122, 0.1);
    --bg-primary-dark: rgba(207, 113, 31, 0.95);

    /* Line height */
    --line-height-default: 1;
    --line-height-sm: 1.05;
    --line-height-md: 1.5;
    --line-height-lg: 1.8;

    /* Transitions */
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    /* Font Sizes */
    --font-12: 1.2rem;
    --font-14: 1.4rem;
    --font-16: 1.6rem;
    --font-18: 1.8rem;
    --font-20: 2rem;
    --font-24: 2.4rem;
    --font-30: 3rem;
    --font-36: 3.6rem;
    --font-44: 4.4rem;
    --font-52: 5.2rem;
    --font-62: 6.2rem;
    --font-74: 7.4rem;
    --font-86: 8.6rem;
    --font-98: 9.8rem;
    --font-140: 14rem;

    /* Font weight */
    --font-weight-sm: 300;
    --font-weight-default: 400;
    --font-weight-md: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;

    /* Letter spacing */
    --letter-spacing-sm: 0.5px;
    --letter-spacing-default: 1px;
    --letter-spacing-md: 1.2px;

    /* Border radius */
    --border-radius-default: 0.9rem;
    --border-radius-md: 1.1rem;

    /* Box-shadow */
    --box-shadow-sm: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
      0px 4px 6px -2px rgba(0, 0, 0, 0.05);
    --box-shadow-md: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    --box-shadow-lg: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

export default variables;
