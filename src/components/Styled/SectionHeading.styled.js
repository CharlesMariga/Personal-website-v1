import styled from "styled-components";

const StyledSectionHeading = styled.div`
  display: flex;
  gap: 2rem;

  p {
    color: var(--primary);
  }

  h2 {
    font-size: var(--font-44);
    letter-spacing: 2px;
    display: inline-flex;
    background-image: linear-gradient(to left, var(--white), var(--primary));
    -webkit-background-clip: text;
    color: transparent;
    position: relative;

    &::before,
    &::after {
      content: "";
      height: 3px;
      background-color: var(--primary);
      position: absolute;
      left: 0;
    }

    &::before {
      width: 10rem;
      bottom: -10px;
    }

    &::after {
      width: 5rem;
      bottom: -23px;
    }
  }
`;

export default StyledSectionHeading;
