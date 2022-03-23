import React from "react";
import { BackgroundContentContainer } from "./Styled/Background.styled";

const StyledBackgroundImage = ({ children }) => {
  return <BackgroundContentContainer>{children}</BackgroundContentContainer>;
};

export default StyledBackgroundImage;
