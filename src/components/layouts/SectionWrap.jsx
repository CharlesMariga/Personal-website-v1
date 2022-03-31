import React from "react";
import styled from "styled-components";
import { NavigationDots } from "..";

const SectionWrap = ({ children, idName }) => {
  return (
    <SectionWrapper>
      {children}
      <NavigationDots idName={idName} />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export default SectionWrap;
