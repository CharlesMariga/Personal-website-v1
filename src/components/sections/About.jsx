import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionHeading } from "../global";
import { SectionWrap } from "../layouts";
import signature from "../../assets/images/image2vector.svg";
import { usePreferredReducedMotion } from "../../hooks";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  const prefersReducedMotion = usePreferredReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (inView)
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          ease: [0.645, 0.045, 0.355, 1],
          duration: 1,
        },
      });

    if (!inView)
      animation.start({
        y: "40px",
        opacity: 0,
        transition: {
          ease: [0.645, 0.045, 0.355, 1],
          duration: 1,
        },
      });
  });

  return (
    <SectionWrap idName="about">
      <div ref={ref}>
        <AboutSection id="about">
          <motion.div animate={animation}>
            <SectionHeading title="About Me" number="01" />
            <AboutContainer>
              <AvaterFigure>
                <StaticImage
                  src="../../assets/images/avater.jpg"
                  alt="Charles Mariga"
                  className="avater-img"
                />
              </AvaterFigure>
              <div>
                <AboutText>
                  Hello! My name is Charles and I enjoy building things that
                  reside on the internet. My interest in programming started
                  back in 2017 after I finished high school, and I wanted to
                  learn about how the internet works. That's what led me to
                  discovering what web-pages are and knowing that they are made
                  using HTML, CSS &amp; JavaScript. This sparked my interest in
                  programming which led me to pursue a Bachelor's degree in
                  Information Technology.
                </AboutText>
                <AboutText>
                  I've since have been building note-worthy websites and webapps
                  that comply with the latest web design trends. I help convert
                  a vision or an idea into a meaningful and useful product. I am
                  passionate about developing excelent software that helps to
                  improve the world around me.
                </AboutText>
                <AboutText>
                  My main focus these days is building accessible, inclusive
                  products and digital experiences at{" "}
                  <a
                    href="https://soop.co.nz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SOOP (Software Operations), NZ
                  </a>
                  . I also have a great interest on blockchain technology and I
                  am working on creating an arbitrage crypto bot on the ethereum
                  main network using Solidity for smart contracts, aave for
                  flashloans, uniswap and pancake for swapping tokens and
                  The-graph for fetching data.
                </AboutText>
                <SignatureContainer>
                  <Signature src={signature} alt="Signature" />
                </SignatureContainer>
              </div>
            </AboutContainer>
          </motion.div>
        </AboutSection>
      </div>
    </SectionWrap>
  );
};

const AboutSection = styled.div`
  margin: 6rem 0;
`;

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
  overflow: hidden;

  @media screen and (${({ theme }) => theme.bp.desktopXS}) {
    float: none;
    margin: 0 auto;
    transform: translateX(0);
    margin-bottom: 4rem;
    margin-top: 4rem;
    width: 27rem;
    height: 27rem;
  }

  @media screen and (${({ theme }) => theme.bp.mobileL}) {
    width: 20rem;
    height: 20rem;
  }

  .avater-img {
    width: 100%;
    height: 100%;
    z-index: -1;
  }

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

const AboutText = styled.p`
  line-height: var(--line-height-md);
  margin-top: 2rem;

  @media screen and (${({ theme }) => theme.bp.mobileL}) {
    text-align: center;
  }

  a {
    &:link,
    &:visited {
      color: var(--primary);
    }
  }
`;

const SignatureContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Signature = styled.img`
  margin-top: 4rem;
  width: 35%;

  @media screen and (${({ theme }) => theme.bp.tabletS}) {
    display: flex;
    width: 60%;
    margin: 4rem auto;
  }
`;

export default About;
