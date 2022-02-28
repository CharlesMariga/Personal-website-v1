import React from "react";
import StyledSectionHeading from "../components/Styled/SectionHeading.styled";

export default function SectionHeading({ title, number }) {
  return (
    <StyledSectionHeading>
      <p>{number}</p>
      <h2>{title}</h2>
    </StyledSectionHeading>
  );
}
