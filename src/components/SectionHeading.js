import React from "react";
import StyledSectionHeading from "../components/Styled/SectionHeading.styled";

export default function SectionHeading({ title }) {
  return (
    <StyledSectionHeading>
      <div
        className="after:content-[attr(title)] after:absolute after:-top-2 after:left-0 after:-z-10 after:text-9xl flex items-center after:text-transparent text-shadow"
        title={title}
      >
        <h2 className="block">{title}</h2>
      </div>
    </StyledSectionHeading>
  );
}
