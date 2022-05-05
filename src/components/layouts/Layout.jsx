import React, { useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { GlobalStyles, theme } from "../../styles";
// import { Footer } from "../sections";
import {
  SocialLinks,
  Email,
  Head,
  StyledBackgroundImage,
  Loader,
  Nav,
} from "..";

const Layout = ({ location, children, page }) => {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  const scrollContent = useRef(null);

  return (
    <>
      <Head />
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {isLoading && isHome ? (
            <Loader finishedLoading={() => setIsLoading(false)} />
          ) : (
            <StyledBackgroundImage>
              {page !== "404" && <SocialLinks isHome={isHome} />}
              {page !== "404" && <Email isHome={isHome} />}
              {page !== "404" && page !== "archive" && (
                <Nav isHome={isHome} contentToScroll={scrollContent} />
              )}
              <Content ref={scrollContent}>
                <div id="home"></div>
                {children}
                {/* {page !== "404" && page !== "archive" && <Footer />} */}
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
    background: var(--white);
    border-radius: 1rem;
    transition: var(--transition);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--primary-light);
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    padding: 0 6rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default Layout;
