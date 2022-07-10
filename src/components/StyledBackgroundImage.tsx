import React from "react";
import styled from "styled-components";
import bgImage from "../assets/images/orange_circle.png";
import { themeInterface } from "../interfaces/ThemeStyle.Interface";

interface Props {
  children: React.ReactElement;
  mode: string;
}

const StyledBackgroundImage: React.FC<Props> = ({ children, mode }) => {
  return (
    <BackgroundContentContainer mode={mode}>
      {children}
    </BackgroundContentContainer>
  );
};

const BackgroundContentContainer = styled.div<{
  mode: string;
  theme: themeInterface;
}>`
  position: relative;
  max-height: 100vh;
  overflow: hidden;
  color: var(--text-color);

  ${({ mode, theme }) =>
    mode === "light" ? theme.mixins.lightMode : theme.mixins.darkMode}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main-bg);
    z-index: -2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 10%;
    left: 5.5%;
    background-image: ${`url(${bgImage})`};
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(141px);
    width: 645px;
    height: 645px;
    opacity: 0.2;
    z-index: -1;
  }
`;

export default StyledBackgroundImage;
