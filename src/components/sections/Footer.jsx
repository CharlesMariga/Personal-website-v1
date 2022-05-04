import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/images/footer-bg.png";
import { navLinks } from "../../config";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <FooterSection>
      <TopContainer>
        <FirstColumn>
          <Text>
            If you might be interested in what I might have to say in topics
            such as software development, productivity, and tech in general,
            please consider subscribing to my monthly newsletter, which I am
            looking starting soon.
          </Text>
          <NewsLetterContainer>
            <ColumnHeading>Join my newsletter</ColumnHeading>
            <SubscriptionForm>
              <input type="email" placeholder="Email" />
              <input type="submit" value="Join" className="btn btn--full" />
            </SubscriptionForm>
          </NewsLetterContainer>
        </FirstColumn>
        <SecondColumn>
          <ColumnHeading>Site menu</ColumnHeading>
          <ul>
            {navLinks.length &&
              navLinks.map(({ name, id }, index) => (
                <Link to={`/${id}`} key={index}>
                  {name}
                </Link>
              ))}
          </ul>
        </SecondColumn>
        <ThirdColumn>
          <ColumnHeading>Contact me</ColumnHeading>
          <address>
            <p>Email: charlesmariga37@gmail.com</p>
          </address>
        </ThirdColumn>
      </TopContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-image: ${`url(${bgImage})`};
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
  grid-template-columns: 2fr 1.5fr 1.5fr;
  grid-gap: 4rem;
`;

const FirstColumn = styled.div`
  .logo {
    fill: var(--primary);
  }
`;

const NewsLetterContainer = styled.div``;

const ColumnHeading = styled.h4`
  color: var(--primary-light);
  margin-bottom: 2rem;
`;

const SubscriptionForm = styled.form`
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-gap: 1rem;

  input[type="email"] {
    padding: 1.2rem;
    font-size: var(--font-16);
    background-color: transparent;
    border: 2px solid var(--white);
    outline: none;
    color: var(--white);
    transition: var(--transition);
    border-radius: var(--border-radius-default);

    &:focus {
      border: 2px solid var(--primary);
    }
  }
`;

const SecondColumn = styled.div``;

const ThirdColumn = styled.div``;

const Text = styled.div`
  line-height: var(--line-height-md);
  margin-bottom: 3rem;
`;

export default Footer;
