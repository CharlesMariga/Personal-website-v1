import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

import { navLinks } from "../config";
import { loaderDelay } from "../utils";
import { IconLogo } from "./icons";
import { useScrollDirection } from "../hooks";

const Nav = ({ isHome, scrollElement }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [scrollToTop, setScrollToTop] = useState(true);
  const scrollContent = scrollElement.current;
  const scrollDirection = useScrollDirection(scrollContent);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 500);

    const handleScroll = function () {
      setScrollToTop(window.pageXOffset < 50);
    };

    scrollContent && scrollContent.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      scrollContent &&
        scrollContent.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContent]);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";

  return (
    <StyledHeader scrollDirection={scrollDirection} scrollToTop={scrollToTop}>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <IconLogo width={42} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <StyledNavLinks>
          <TransitionGroup component={null}>
            {isMounted &&
              navLinks &&
              navLinks.map(({ name, id }, i) => (
                <CSSTransition
                  key={i}
                  classNames={fadeDownClass}
                  timeout={timeout}
                  style={{
                    transitionDelay: `${isHome ? i * 100 : 0}ms`,
                  }}
                >
                  <StyledNavLink>
                    <Link to={`#${id}`}>{name}</Link>
                  </StyledNavLink>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </StyledNavLinks>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  background-color: transparent;
  padding: 0 5rem;

  height: 10rem;
  display: flex;

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({ scrollDirection, scrollToTop }) =>
      scrollDirection === "up" &&
      !scrollToTop &&
      css`
        transform: translateY(0px);
        backdrop-filter: blur(10px);
        box-shadow: var(--box-shadow-sm);
      `}

    ${({ scrollDirection, scrollToTop }) =>
      scrollDirection === "down" &&
      !scrollToTop &&
      css`
        transform: translateY(-100%);
        backdrop-filter: blur(10px);
        box-shadow: var(--box-shadow-sm);
      `}
  }

  svg {
    fill: var(--primary);
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledNavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled.li`
  padding: 1rem 1.5rem;
  counter-increment: item 1;

  a {
    color: var(--white);

    &::before {
      content: "0" counter(item) ".";
      margin-right: 5px;
      color: var(--primary);
      text-align: right;
      font-size: var(--font-14);
    }
  }
`;

export default Nav;
