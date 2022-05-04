import React from "react";
import styled from "styled-components";
import { IconLogo } from "../../components/icons";

const Footer = () => {
  return (
    <FooterSection>
      <TopContainer>
        <FirstColumn>
          <Logo>
            <IconLogo width={36} />
          </Logo>
          <Text>This is a paragraph</Text>
        </FirstColumn>
        <SecondColumn></SecondColumn>
        <ThirdColumn></ThirdColumn>
      </TopContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`;

const TopContainer = styled.div`
  padding: 9rem 0;
  padding-top: 0;
`;

const FirstColumn = styled.div`
  .logo {
    fill: var(--primary);
  }
`;

const Logo = styled.div`
  svg {
    fill: var(--primary);
  }
`;

const SecondColumn = styled.div``;

const ThirdColumn = styled.div``;

const Text = styled.div``;

export default Footer;
