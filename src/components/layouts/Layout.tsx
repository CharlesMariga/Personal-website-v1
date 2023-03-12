import React, { useEffect, useRef, useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { selectMode, setMode } from "../../features/theme/themeSlice";

import { useDispatch, useSelector } from "react-redux";
import {
  Email,
  Head,
  Loader,
  Nav,
  SocialLinks,
  StyledBackgroundImage,
} from "..";
import { GlobalStyles, theme } from "../../styles";
import { Footer } from "../sections";

interface Props {
  page: string;
  location: {
    pathname: string;
  };
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ location, children, page }) => {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  const scrollContent = useRef<HTMLElement>(null);
  const excludePages = ["404", "archive", "newsletter-thanks"];

  const mode = useSelector(selectMode);

  const dispatch = useDispatch();

  useEffect(() => {
    let themeClass = localStorage.getItem("themeMode");

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
              <>
                {page !== "404" && <SocialLinks isHome={isHome} />}
                {page !== "404" && <Email isHome={isHome} />}
                {!excludePages.includes(page) && (
                  <Nav isHome={isHome} contentToScroll={scrollContent} />
                )}
                <Content ref={scrollContent}>
                  <div id="home"></div>
                  {children}
                  {!excludePages.includes(page) && <Footer />}
                </Content>
              </>
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
