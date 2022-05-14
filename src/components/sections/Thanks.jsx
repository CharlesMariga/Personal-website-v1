import React from "react";
import styled from "styled-components";
import { ThemeToggle } from "..";

const Thanks = () => {
  return (
    <Wrapper>
      <ThemeToggleContainer>
        <ThemeToggle />
      </ThemeToggleContainer>
      <Heading>Welcome aboard!</Heading>
      <SecondHeading>
        Thanks for joing my newsletter. I am glad to have you on board.
      </SecondHeading>
      <Divider />
      <TextContainer>
        <Text>
          One last thing - before we can make things official, you'll need to
          click the confirmation button in the emial I just sent you.
        </Text>
        <Text>
          As soon as you do that, you'll be a valued member of my newsletter and
          you'll hear from me once a month(ish) by email. I'll be sharing about
          tech, programming and productivity. If you ever need to get in touch
          with me, you can always reply to those emails and we can chat.
        </Text>
        <Gratitude>Thanks!</Gratitude>
        <Name>Charles</Name>
      </TextContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ThemeToggleContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
`;

const Heading = styled.h1`
  font-size: var(--font-52);
  background-image: var(--section-heading-linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
`;

const SecondHeading = styled.h2`
  text-align: center;
  margin-top: 2rem;
  font-size: var(--font-24);
  font-weight: 300;
`;

const Divider = styled.div`
  width: 200px;
  height: 10px;
  border-radius: 100px;
  background-color: var(--second-text-color);
  margin: 3rem auto;
  opacity: 0.7;
`;

const TextContainer = styled.div`
  padding: 0 10vw;
  line-height: var(--line-height-md);
`;

const Text = styled.p`
  margin-bottom: 2rem;

  @media screen and (${({ theme }) => theme.bp.mobileL}) {
    text-align: center;
  }
`;

const Gratitude = styled.p`
  margin-bottom: 1rem;
  opacity: 0.7;

  @media screen and (${({ theme }) => theme.bp.mobileL}) {
    text-align: center;
  }
`;

const Name = styled.p`
  opacity: 0.7;

  @media screen and (${({ theme }) => theme.bp.mobileL}) {
    text-align: center;
  }
`;

export default Thanks;
