import React from "react";
import { Side } from ".";
import { email } from "../config";
import styled from "styled-components";

const Email = ({ isHome }) => {
  return (
    <Side isHome={isHome} orientation="right">
      <StyledEmail>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </StyledEmail>
    </Side>
  );
};

const StyledEmail = styled.div`
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
    background-color: var(--text-color);
  }
`;

const EmailLink = styled.a`
  color: var(--text-color);
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

export default Email;
