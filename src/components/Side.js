import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { usePreferredReducedMotion } from "../hooks";
import { loaderDelay } from "../utils";
import { StyledSide } from "./Styled/Side.styled";

export default function Side({ children, orientation, isHome }) {
  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePreferredReducedMotion();

  useEffect(() => {
    if (!isHome || prefersReducedMotion) return;

    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  });

  return (
    <StyledSide orientation={orientation}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition
                in={isMounted}
                classNames="fadeup"
                timeout={loaderDelay}
              >
                {children}
              </CSSTransition>
            )}
          </TransitionGroup>
        </>
      )}
    </StyledSide>
  );
}
