import React from "react";
import styled from "styled-components";
import { SectionHeading, TertiaryHeading } from "../global";

const Archive = () => {
  return (
    <Wrapper>
      <ArchiveSection>
        <SectionHeading title="Archive" />
        <TertiaryHeading title="My long list of projects" />
      </ArchiveSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ArchiveSection = styled.div`
  padding: 6rem 0;
`;

export default Archive;
