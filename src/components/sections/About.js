import React from "react";
import styled from "styled-components";
import SectionHeading from "../global/SectionHeading";

const About = () => {
  return (
    <AboutSection>
      <SectionHeading title="About Me" number="01" />
      <AboutContainer></AboutContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 10rem 0;
`;

const AboutContainer = styled.div``;

export default About;
