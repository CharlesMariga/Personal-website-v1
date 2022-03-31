import React from "react";
import { socialLinks } from "../config";
import { Side, Icon } from ".";
import styled from "styled-components";

const SocialLinks = ({ isHome }) => {
  return (
    <Side isHome={isHome} orientation="left">
      <SocialLinkList>
        {socialLinks &&
          socialLinks.map(({ url, name }, index) => (
            <SocialLinkItem key={index}>
              <SocialLink
                href={url}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={name} width={20} height={20} />
              </SocialLink>
            </SocialLinkItem>
          ))}
      </SocialLinkList>
    </Side>
  );
};

const SocialLinkList = styled.ul`
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

const SocialLinkItem = styled.li`
  padding: 2rem 1rem;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

const SocialLink = styled.a`
  color: var(--white);
  display: inline-block;
  transition: var(--transition);
  letter-spacing: var(--letter-spacing-md);

  &:hover {
    transform: translateY(-3px);
    color: var(--primary);
  }
`;

export default SocialLinks;
