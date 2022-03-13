import React from "react";
import StyledLoader from "./Styled/Loader.styled";

export default function Loader({ finishedLoading }) {
  setTimeout(() => {
    finishedLoading();
  }, 2000);

  return (
    <StyledLoader>
      <h1>Loading...</h1>
    </StyledLoader>
  );
}
