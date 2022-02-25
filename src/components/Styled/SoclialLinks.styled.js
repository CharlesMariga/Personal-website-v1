import styled from "styled-components";

export const SocialLinkList = styled.ul`
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

export const SocialLinkItem = styled.li`
  padding: 2rem 1rem;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const SocialLink = styled.a`
  color: var(--white);
  display: inline-block;
  transition: var(--transition);
  letter-spacing: var(--letter-spacing-md);

  &:hover {
    transform: translateY(-3px);
    color: var(--primary);
  }
`;
