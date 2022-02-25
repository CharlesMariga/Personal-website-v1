import React from "react";
import StyledSectionHeading from "../components/Styled/SectionHeading.styled";

export default function SectionHeading({ title }) {
  return (
    <StyledSectionHeading title={title}>
      <h2>{title}</h2>
    </StyledSectionHeading>
  );
}
