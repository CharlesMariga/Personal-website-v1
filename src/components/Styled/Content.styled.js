import styled from "styled-components";

const Content = styled.main`
  display: block;
  flex-direction: column;
  height: 100vh;
  padding: 0 16rem;
  overflow: auto;

  @media (${({ theme }) => theme.bp.tabletL}) {
    padding: 0 8rem;
  }
`;

export default Content;
