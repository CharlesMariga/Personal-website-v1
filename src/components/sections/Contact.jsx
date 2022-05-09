import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { SectionWrap } from "../layouts";
import { usePreferredReducedMotion } from "../../hooks";

const Contact = () => {
  const prefersReducedMotion = usePreferredReducedMotion();

  return (
    <SectionWrap idName="contact">
      {prefersReducedMotion ? (
        <ContactSection id="contact">
          <Card>
            <Number>04.</Number>
            <TextBox>
              <Heading>Get in touch</Heading>
              <Text>
                Whether you want to ask me a question, or you just want to buy me a coffee ☕😄, don't hesitate to get
                in touch. My inbox is always open and I will try as much as possible to get back to you.
              </Text>
              <Button className="btn btn--full" href="mailTo:charlesmariga37@gmail.com">
                Contact Me
              </Button>
            </TextBox>
          </Card>
        </ContactSection>
      ) : (
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1],
          }}
        >
          <ContactSection id="contact">
            <Card>
              <Number>04.</Number>
              <TextBox>
                <Heading>Get in touch</Heading>
                <Text>
                  Whether you want to ask me a question, or you just want to buy me a coffee ☕😄, don't hesitate to get
                  in touch. My inbox is always open and I will try as much as possible to get back to you.
                </Text>
                <Button className="btn btn--full" href="mailTo:charlesmariga37@gmail.com">
                  Contact Me
                </Button>
              </TextBox>
            </Card>
          </ContactSection>
        </motion.div>
      )}
    </SectionWrap>
  );
};

const ContactSection = styled.div`
  padding: 6rem 0;
`;

const Card = styled.div`
  padding: 6rem 9rem;
  background-color: var(--card-background-color);
  backdrop-filter: blur(120px);
  border-radius: var(--border-radius-md);

  @media screen and (${({ theme }) => theme.bp.mobileL}) {
    padding: 3.2rem 2.8rem;
  }
`;

const Number = styled.div`
  color: var(--primary);
  margin-bottom: 5rem;
`;

const TextBox = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Heading = styled.h2`
  font-size: var(--font-52);
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
  font-size: var(--font-18);
  line-height: var(--line-height-md);
`;

const Button = styled.a`
  text-align: center;
  display: inline-block;
  align-self: center;
`;

export default Contact;
