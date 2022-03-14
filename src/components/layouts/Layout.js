import React, { useState } from "react";
import { Head, StyledBackgroundImage } from "../../components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../../styles";
import Loader from "../Loader";
import SocialLinks from "../SocialLinks";
import Email from "../Email";
import Content from "../Styled/Content.styled";

export default function Layout({ location, children }) {
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
                {children}
                {/* Footer goes here */}
              </Content>
            </StyledBackgroundImage>
          )}
        </ThemeProvider>
      </div>
    </>
  );
}
