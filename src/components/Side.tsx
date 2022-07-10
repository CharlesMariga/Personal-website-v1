import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { usePreferredReducedMotion } from "../hooks";
import { loaderDelay } from "../utils";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  orientation: string;
  isHome: boolean;
}

const Side: React.FC<Props> = ({ children, orientation, isHome }) => {
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
};

const StyledSide = styled.div<{ orientation: string }>`
  width: 4rem;
  position: fixed;
  bottom: 0;
  left: ${({ orientation }) => (orientation === "left" ? "4rem" : "auto")};
  right: ${({ orientation }) => (orientation === "right" ? "4rem" : "auto")};

  @media (${({ theme }) => theme.bp.tabletL}) {
    display: none;
  }
`;

export default Side;
