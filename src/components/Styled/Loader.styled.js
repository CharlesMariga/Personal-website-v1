import styled from "styled-components";

const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #010101;
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
      animation: animateLogo 3s forwards ease, fillIt 0.8s 3s forwards;
    }
  }
`;

export default StyledLoader;
