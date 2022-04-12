import { css } from "styled-components";

/* 
--- 01 TYPOGRAPNY SYSTEM

- Font sizes (px): 
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weight:
Default: 400
Medium: 500
Semi-bold: 600
Bold: 700

- Line height:
Default: 1
Small: 1.05
Paragraph default: 1.6 
Large: 1.8

- Letter spacing: 
Default: 1
Small: -0.5
Medium: 1.2
Paragraph default: 1.6

- Spacing system (px):
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128


--- 02 COLORS
- primary: #e67e22
- tints: #fdf2e9, #fae5d3, , #45260a
- shades: #cf711f
- accents:
- greys: #888, #767676 (lightest grey allowed on #fff, #6f6f6f (lightest grey allowed on #fdf2e9 #555, #333

--- 03 SHADOWS
box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

--- 05 WHITESPACE
*/

const variables = css`
  :root {
    --white: #fae5d3;
    --primary-light: #f0b27a;
    --primary: #e67e22;
    --primary-dark: #cf711f;

    /* Bg colors */
    --bg-dark: rgb(22, 23, 27);

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
  }
`;

export default variables;
