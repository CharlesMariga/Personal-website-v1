import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMode } from "../../features/theme/themeSlice";

import bgImage from "../../assets/images/footer-bg.png";
import { navLinks } from "../../config";
import { Link } from "gatsby";
import { socialLinks } from "../../config";
import { Icon } from "..";

const Footer = () => {
  const mode = useSelector(selectMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = e => {
    e.preventDefault();

    console.log("Name: ", name);
    console.log("Email: ", email);
  };

  return (
    <FooterSection mode={mode}>
      <TopContainer>
        <FirstColumn>
          <Text>
            If you might be interested in what I might have to say in topics such as software development, productivity,
            and tech in general, please consider subscribing to my monthly newsletter, which I am looking starting soon.
          </Text>
          <NewsLetterContainer>
            <ColumnHeading>Join my newsletter</ColumnHeading>
            <SubscriptionForm onSubmit={e => submitForm(e)}>
              <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
              <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
              <input type="submit" value="Join" className="btn btn--full" />
            </SubscriptionForm>
          </NewsLetterContainer>
        </FirstColumn>
        <SecondColumn>
          <ColumnHeading>Site menu</ColumnHeading>
          <ul>
            {navLinks.length &&
              navLinks.map(({ name, id }, index) => (
                <li key={index}>
                  <Link to={`/#${id}`}>{name}</Link>
                </li>
              ))}
          </ul>
        </SecondColumn>
        <ThridColumn>
          <ColumnHeading>Contact me</ColumnHeading>
          <address>
            <p>Email: charlesmariga37@gmail.com</p>
          </address>
          <SocialIconsContainer>
            <ColumnHeading>Social links</ColumnHeading>
            <SocialLinksList>
              {socialLinks &&
                socialLinks.map(({ url, name }, index) => (
                  <SocialLinkItem key={index}>
                    <SocialLink href={url} aria-label={name} target="_blank" rel="noreferrer">
                      <Icon name={name} width={20} height={20} />
                    </SocialLink>
                  </SocialLinkItem>
                ))}
            </SocialLinksList>
          </SocialIconsContainer>
        </ThridColumn>
      </TopContainer>
      <BottomContainer>
        <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
      </BottomContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-image: ${({ mode }) => (mode === "dark" ? `url(${bgImage})` : "")};
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: -16rem;
  margin-left: -16rem;
  padding: 0 16rem;
`;

const TopContainer = styled.div`
  padding: 9rem 0;
  padding-top: 0;
  display: grid;
  grid-template-columns: 5fr 1fr 2fr;
  grid-template-rows: auto;
  grid-gap: 6rem;

  @media screen and (${({ theme }) => theme.bp.desktopS}) {
    grid-template-columns: 6fr 3fr;
  }

  @media screen and (${({ theme }) => theme.bp.desktopXS}) {
    grid-template-columns: 1fr;
  }
`;

const FirstColumn = styled.div`
  @media screen and (${({ theme }) => theme.bp.desktopS}) {
    grid-row: 1 / 3;
  }

  .logo {
    fill: var(--primary);
  }
`;

const NewsLetterContainer = styled.div``;

const ColumnHeading = styled.h4`
  color: var(--second-text-color);
  margin-bottom: 2rem;
  letter-spacing: 1px;
`;

const SubscriptionForm = styled.form`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto;

  @media screen and (${({ theme }) => theme.bp.desktopS}) {
    grid-template-columns: 5fr 3fr;
  }

  @media screen and (${({ theme }) => theme.bp.desktopS}) {
    grid-template-columns: 1fr;
  }

  @media screen and (${({ theme }) => theme.bp.desktopL}) {
    grid-template-columns: 5fr 5fr 2fr;
  }

  input[type="email"],
  input[type="text"] {
    padding: 1.2rem;
    font-size: var(--font-16);
    background-color: transparent;
    border: 2px solid var(--primary-light);
    outline: none;
    color: var(--text-color);
    transition: var(--transition);
    border-radius: var(--border-radius-default);

    &:focus {
      border: 2px solid var(--primary);
    }
  }
`;

const SecondColumn = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style: none;
    margin-bottom: 5rem;

    @media screen and (${({ theme }) => theme.bp.desktopXS}) {
      margin-bottom: 0;
    }

    li {
      a {
        color: var(--text-color);
        opacity: 0.6;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const Text = styled.div`
  line-height: var(--line-height-md);
  margin-bottom: 3rem;
`;

const BottomContainer = styled.div`
  padding: 4rem 0;

  p {
    text-align: center;
    opacity: 0.6;
  }
`;

const ThridColumn = styled.div`
  address {
    opacity: 0.6;
    margin-bottom: 3rem;
  }
`;

const SocialIconsContainer = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.bp.tabletL}) {
    display: block;
  }
`;

const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 3rem;
`;

const SocialLinkItem = styled.li`
  padding: 1rem 1rem;
`;

const SocialLink = styled.a`
  color: var(--text-color);
  display: inline-block;
  transition: var(--transition);
  letter-spacing: var(--letter-spacing-md);

  &:hover {
    transform: translateY(-3px);
    color: var(--primary);
  }
`;

export default Footer;
