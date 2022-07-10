import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../../hooks";

import Confetti from "react-confetti";
import { ThemeToggle } from "..";

const Thanks: React.FC = () => {
  const { width, height } = useWindowSize();

  console.log(width, height);

  return (
    <>
      {width && height && (
        <>
          <ConfettiWrapper>
            <Confetti
              numberOfPieces={1200}
              recycle={false}
              width={width}
              height={height}
            />
          </ConfettiWrapper>
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
                One last thing - before we can make things official, you'll need
                to click the confirmation button in the emial I just sent you.
              </Text>
              <Text>
                As soon as you do that, you'll be a valued member of my
                newsletter and you'll hear from me once a month(ish) by email.
                I'll be sharing about tech, programming and productivity. If you
                ever need to get in touch with me, you can always reply to those
                emails and we can chat.
              </Text>
              <Gratitude>Thanks!</Gratitude>
              <Name>Charles</Name>
            </TextContainer>
          </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ConfettiWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ThemeToggleContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
`;

const Heading = styled.h1`
  font-size: var(--font-44);
  background-image: var(--text-linear-gradient);
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
  width: 20rem;
  height: 0.6rem;
  border-radius: 100px;
  background-color: var(--second-text-color);
  margin: 3rem auto;
  opacity: 0.7;
`;

const TextContainer = styled.div`
  line-height: var(--line-height-md);
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.p`
  margin-bottom: 2rem;
`;

const Gratitude = styled.p`
  margin-bottom: 1rem;
  opacity: 0.7;
`;

const Name = styled.p`
  opacity: 0.7;
`;

export default Thanks;
