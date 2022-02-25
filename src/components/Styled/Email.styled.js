import styled from "styled-components";

export const StyledEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 9rem;
    margin: 0 auto;
    background-color: white;
  }
`;

export const EmailLink = styled.a`
  color: var(--white);
  display: inline-block;
  transition: var(--transition);
  writing-mode: vertical-rl;
  text-decoration: none;
  margin-bottom: 2rem;
  font-size: var(--font-16);

  &:hover {
    transform: translateY(-3px);
    color: var(--primary);
  }
`;
