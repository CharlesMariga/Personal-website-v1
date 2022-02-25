import styled from "styled-components";

const Content = styled.main`
  display: block;
  flex-direction: column;
  height: 100vh;
  padding: 0 16rem;
  overflow: auto;

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

export default Content;
