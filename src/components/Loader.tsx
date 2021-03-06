import React from "react";
import styled from "styled-components";

import { IconLogo } from "./icons";

interface Props {
  finishedLoading: () => void;
  mode: string;
}

const Loader: React.FC<Props> = ({ finishedLoading, mode }) => {
  setTimeout(() => {
    finishedLoading();
  }, 5000);

  return (
    <StyledLoader mode={mode}>
      <IconLogo width={125} />
    </StyledLoader>
  );
};

const StyledLoader = styled.div<{ mode: string }>`
  ${({ mode, theme }) =>
    mode === "light" ? theme.mixins.lightMode : theme.mixins.darkMode}

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--main-bg);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  svg {
    path {
      stroke: var(--primary);
      stroke-width: 2;
      stroke-dasharray: 522;
      stroke-dashoffset: 522;
      animation: 3s ease 1s forwards animateLogo, 0.8s fillIt 4s forwards;
    }
  }
`;

export default Loader;
