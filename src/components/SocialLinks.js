import React from "react";
import { socialLinks } from "../config";
import { Side, Icon } from ".";
import {
  SocialLink,
  SocialLinkItem,
  SocialLinkList,
} from "./Styled/SoclialLinks.styled";

export default function SocialLinks({ isHome }) {
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
}
