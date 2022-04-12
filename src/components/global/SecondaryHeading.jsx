import React from "react";
import styled from "styled-components";

const SecondaryHeading = ({ title }) => {
  return <Heading>{title}</Heading>;
};

const Heading = styled.h3`
  font-size: var(--font-30);
  text-align: center;
  text-transform: capitalize;
`;

export default SecondaryHeading;
