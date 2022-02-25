import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: var(--font-62);
    line-height: var(--line-height-md);
    font-weight: var(--font-weight-semi-bold);
    display: inline-block;
    background-image: linear-gradient(to right, var(--white), var(--primary));
    -webkit-background-clip: text;
    color: transparent;
    margin-top: 1.6rem;
  }

  h2 {
    color: var(--primary);
    line-height: var(--line-height-sm);
  }

  h3 {
    font-size: var(--font-52);
    margin-top: 1.2rem;
  }

  p {
    margin-top: 2rem;
    max-width: 54rem;
    /* font-size: var(--font-16); */
    line-height: var(--line-height-md);
  }

  .btn {
    margin-top: 4.8rem;
  }
`;

export const AboutSection = styled.section`
  padding: 10rem 0;
`;
