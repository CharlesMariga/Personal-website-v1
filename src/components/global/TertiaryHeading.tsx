import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  className: string;
}

const TertiaryHeading: React.FC<Props> = ({ title, className }) => {
  return <Heading className={`${className}`}>{title}</Heading>;
};

const Heading = styled.h5`
  font-size: var(--font-24);
  letter-spacing: var(--letter-spacing-md);
`;

export default TertiaryHeading;
