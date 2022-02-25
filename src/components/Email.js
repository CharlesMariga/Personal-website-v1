import React from "react";
import { Side } from ".";
import { email } from "../config";
import { StyledEmail, EmailLink } from "./Styled/Email.styled";

export default function Email({ isHome }) {
  return (
    <Side isHome={isHome} orientation="right">
      <StyledEmail>
        <EmailLink
          href={`mailto:${email}`}
          className="mx-auto my-5 tracking-wider writing-mode-vertial-rl hover:text-vermillion-700 hover:-translate-y-1 transition-transform ease-in"
        >
          {email}
        </EmailLink>
      </StyledEmail>
    </Side>
  );
}
