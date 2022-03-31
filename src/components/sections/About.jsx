import React from "react";
import styled from "styled-components";

import SectionHeading from "../global/SectionHeading";
import { SectionWrap } from "../layouts";
import avater from "../../assets/images/avater.jpg";
import signature from "../../assets/images/image2vector.svg";

const About = () => {
  return (
    <SectionWrap idName="about">
      <AboutSection id="about">
        <SectionHeading title="About Me" number="01" />
        <AboutContainer>
          <AvaterFigure>
            <AvaterImage src={avater} alt="Charles Mariga" />
          </AvaterFigure>
          <div>
            <AboutText>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML &amp; CSS!
            </AboutText>
            <AboutText>
              Fast-forward to today, and I&apos;ve had the privilege of working
              at an advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </AboutText>
            <AboutText>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node &amp; React.
              Here are a few technologies I&apos;ve been working with recently:
            </AboutText>
            <Signature src={signature} alt="Signature" />
          </div>
        </AboutContainer>
      </AboutSection>
    </SectionWrap>
  );
};

const AboutSection = styled.section``;

const AboutContainer = styled.div``;

const AvaterFigure = styled.figure`
  width: 32rem;
  height: 32rem;
  border-radius: 50%;
  float: left;
  shape-outside: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  margin: 2rem 3rem;
  transform: translateX(-5rem);
  position: relative;
  box-shadow: 0 0 25px 0 rgb(0 0 0 / 80%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 5px solid var(--primary);
    border-top: none;
    border-bottom: none;
    transform: rotateZ(-45deg);
  }
`;

const AvaterImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const AboutText = styled.p`
  line-height: var(--line-height-md);
  margin-top: 2rem;
`;

const Signature = styled.img`
  margin-top: 4rem;
`;

export default About;
