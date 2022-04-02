import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { GlobalStyles, theme } from "../../styles";
import { SocialLinks, Email, Head, StyledBackgroundImage, Loader } from "..";

const Layout = ({ location, children }) => {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

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
              <SocialLinks isHome={isHome} />
              <Email isHome={isHome} />
              <Content>
                <div id="home"></div>
                {children}
                {/* Footer goes here */}
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
