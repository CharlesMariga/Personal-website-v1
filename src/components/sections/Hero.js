import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import { usePreferredReducedMotion } from "../../hooks";
import { loaderDelay, navDelay } from "../../utils";
import resume from "../../assets/documents/resume.pdf";
import { BackgroundAnimation } from "../index";
import styled from "styled-components";

const Hero = () => {
  const prefersReducedMotion = usePreferredReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const one = <h3>Hi, I'm</h3>;
  const two = <h1>Charles Mariga</h1>;
  const three = <h4>I build things for the web</h4>;
  const four = (
    <p>
      I'm a full stack software engineer specializing in creating goal-driven
      products that provide exceptional experiences to their users.
    </p>
  );
  const five = (
    <a
      className="btn btn--full"
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
    >
      Checkout my resume
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <HeroSection>
      <HeroTextSection>
        <div>
          {prefersReducedMotion ? (
            items.map((item, i) => <div key={i}>{item}</div>)
          ) : (
            <TransitionGroup component={null} in={false}>
              {isMounted &&
                items.map((item, i) => (
                  <CSSTransition
                    key={i}
                    classNames="fadeup"
                    timeout={loaderDelay}
                  >
                    <div
                      style={{
                        transitionDelay: `${i + 1}00ms`,
                        opacity: 0,
                      }}
                    >
                      {item}
                    </div>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          )}
        </div>
      </HeroTextSection>

      <BackgroundAnimationWrapper>
        <BackgroundAnimation />
      </BackgroundAnimationWrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (${({ theme }) => theme.bp.mobileL}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    position: relative;
  }

  h1 {
    font-size: var(--font-62);
    line-height: var(--line-height-md);
    font-weight: var(--font-weight-semi-bold);
    display: inline-block;
    background-image: linear-gradient(to right, var(--white), var(--primary));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-top: 1.6rem;

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: var(--font-52);
    }

    @media (${({ theme }) => theme.bp.mobileL}) {
      font-size: var(--font-44);
    }
  }

  h3 {
    color: var(--primary);
    line-height: var(--line-height-sm);

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: var(--font-20);
    }
  }

  h4 {
    font-size: var(--font-52);
    margin-top: 1.2rem;
    width: max-content;

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: var(--font-36);
    }

    @media (${({ theme }) => theme.bp.mobileL}) {
      width: auto;
    }
  }

  p {
    margin-top: 2rem;
    max-width: 54rem;
    /* font-size: var(--font-16); */
    line-height: var(--line-height-md);
  }

  .btn {
    margin-top: 4.8rem;
  }
`;

const HeroTextSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  overflow: hidden;

  @media (${({ theme }) => theme.bp.mobileL}) {
    margin: 0;
  }

  div {
    width: 100%;
  }
`;

const BackgroundAnimationWrapper = styled.div`
  @media (${({ theme }) => theme.bp.mobileL}) {
    position: absolute;
    top: 27%;
    right: -39%;
    width: 210px;
    height: 210px;
  }
`;

export default Hero;
