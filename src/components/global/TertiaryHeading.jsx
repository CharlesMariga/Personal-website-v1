import React from "react";
import styled from "styled-components";

const TertiaryHeading = ({ title, className }) => {
  return <Heading className={`${className}`}>{title}</Heading>;
};

const Heading = styled.h5`
  font-size: var(--font-24);
  letter-spacing: var(--letter-spacing-md);
`;

export default TertiaryHeading;
