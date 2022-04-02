import React from "react";
import styled from "styled-components";
import bgImage from "../assets/images/orange_circle.png";

const StyledBackgroundImage = ({ children }) => {
  return <BackgroundContentContainer>{children}</BackgroundContentContainer>;
};

const BackgroundContentContainer = styled.div`
  position: relative;
  max-height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-dark);
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
