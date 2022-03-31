import React from "react";
import styled from "styled-components";

import SectionHeading from "../global/SectionHeading";
import { SectionWrap } from "../layouts";

const About = () => {
  return (
    <SectionWrap idName="about">
      <AboutSection id="about">
        <SectionHeading title="About Me" number="01" />
        <AboutContainer></AboutContainer>
      </AboutSection>
    </SectionWrap>
  );
};

const AboutSection = styled.section``;

const AboutContainer = styled.div``;

export default About;
