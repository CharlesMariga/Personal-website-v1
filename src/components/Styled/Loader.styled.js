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
    stroke-width: 2px;
  }
`;

export default StyledLoader;
