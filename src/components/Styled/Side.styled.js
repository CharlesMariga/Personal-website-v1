import styled from "styled-components";

export const StyledSide = styled.div`
  width: 4rem;
  position: fixed;
  bottom: 0;
  left: ${({ orientation }) => (orientation === "left" ? "4rem" : "auto")};
  right: ${({ orientation }) => (orientation === "right" ? "4rem" : "auto")};

  @media (${({ theme }) => theme.bp.tabletL}) {
    display: none;
  }
`;
