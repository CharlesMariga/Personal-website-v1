import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import { usePreferredReducedMotion } from "../../hooks";
import { loaderDelay, navDelay } from "../../utils";
import { HeroSection } from "../Styled/Section.styled";

export default function Hero() {
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
    <a className="btn btn--full" href="/" target="_blank" rel="noreferrer">
      Checkout my resume
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <HeroSection className="flex flex-col min-h-screen justify-center lg:mx-24">
      {prefersReducedMotion ? (
        items.map((item, i) => <div key={i}>{item}</div>)
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition
                in={isMounted}
                key={i}
                classNames="fadeup"
                timeout={loaderDelay}
              >
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </HeroSection>
  );
}
