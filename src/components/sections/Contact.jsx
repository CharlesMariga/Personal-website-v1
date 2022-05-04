import React from "react";
import styled from "styled-components";

import { SectionWrap } from "../layouts";

const Contact = () => {
  return (
    <SectionWrap idName="contact">
      <ContactSection id="contact">Contact me</ContactSection>
    </SectionWrap>
  );
};

const ContactSection = styled.div`
  padding: 6rem 0;
`;

export default Contact;
