import React, { useRef, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { setMode, selectMode } from "../../features/theme/themeSlice";

import { GlobalStyles, theme } from "../../styles";
import { Footer } from "../sections";
import { SocialLinks, Email, Head, StyledBackgroundImage, Loader, Nav } from "..";
import { useDispatch, useSelector } from "react-redux";

const Layout = ({ location, children, page }) => {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  const scrollContent = useRef(null);

  const mode = useSelector(selectMode);

  const dispatch = useDispatch();

  useEffect(() => {
    let themeClass = localStorage.getItem("themeMode", "theme-mode-dark");

    if (!themeClass) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("themeMode", "dark");
        themeClass = "dark";
      } else {
        localStorage.setItem("themeMode", "light");
        themeClass = "light";
      }
    }

    dispatch(setMode(themeClass));
  }, [dispatch]);

  return (
    <>
      <Head />
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {isLoading && isHome ? (
            <Loader mode={mode} finishedLoading={() => setIsLoading(false)} />
          ) : (
            <StyledBackgroundImage mode={mode}>
              {page !== "404" && <SocialLinks isHome={isHome} />}
              {page !== "404" && <Email isHome={isHome} />}
              {page !== "404" && page !== "archive" && <Nav isHome={isHome} contentToScroll={scrollContent} />}
              <Content ref={scrollContent}>
                <div id="home"></div>
                {children}
                {page !== "404" && page !== "archive" && <Footer />}
              </Content>
            </StyledBackgroundImage>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

const Content = styled.main`
  display: block;
  flex-direction: column;
  height: 100vh;
  padding: 0 16rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--second-text-color);
    border-radius: 1rem;
    transition: var(--transition);
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    padding: 0 6rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default Layout;
