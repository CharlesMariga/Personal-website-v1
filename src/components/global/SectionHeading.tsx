import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  number?: string;
}

const SectionHeading: React.FC<Props> = ({ title, number }) => {
  return (
    <StyledSectionHeading>
      {number && <p>{number}</p>}
      <h2>{title}</h2>
    </StyledSectionHeading>
  );
};

const StyledSectionHeading = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 8rem;

  p {
    color: var(--primary);
  }

  h2 {
    font-size: var(--font-44);
    letter-spacing: 2px;
    display: inline-flex;
    background-image: var(--section-heading-linear-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    position: relative;

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: var(--font-36);
    }

    @media (${({ theme }) => theme.bp.mobileL}) {
      font-size: var(--font-30);
    }

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

export default SectionHeading;
