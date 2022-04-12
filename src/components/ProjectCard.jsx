import React from "react";
import styled from "styled-components";
import { Icon } from ".";

const ProjectCard = ({ project }) => {
  const { github, external, title, tech } = project.frontmatter;
  const html = project.html;

  return (
    <Card>
      <CardHeader>
        <IconContainer className="folder">
          <Icon name="Folder" />
        </IconContainer>
        <CardProjectLinks>
          {github && (
            <CardProjectLink
              href={github}
              aria-label="GitHub Link"
              target="_blank"
              rel="noreferrer"
            >
              <IconContainer className="github">
                <Icon name="GitHub" />
              </IconContainer>
            </CardProjectLink>
          )}
          {external && (
            <CardProjectLink
              href={external}
              aria-label="GitHub Link"
              target="_blank"
              rel="noreferrer"
            >
              <IconContainer className="external">
                <Icon name="External" />
              </IconContainer>
            </CardProjectLink>
          )}
        </CardProjectLinks>
      </CardHeader>
      <ProjectTitle>
        <ProjectTitleLink target="_blank" rel="noreferrer">
          {title}
        </ProjectTitleLink>
      </ProjectTitle>
      <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
      <CardFooter>
        <ProjectTechList>
          {tech.length &&
            tech.map((tech, index) => (
              <ProjectTechListItem key={index}>{tech}</ProjectTechListItem>
            ))}
        </ProjectTechList>
      </CardFooter>
    </Card>
  );
};

const Card = styled.div`
  padding: 3.2rem 2.8rem;
  /* background-color: var(--primary); */
  backdrop-filter: blur(120px);
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow-sm);
`;

const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;

  &.github,
  &.external {
    width: 2.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
`;

const CardProjectLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-end;
`;

const CardProjectLink = styled.a`
  display: inline-flex;
  color: var(--white);
`;

const ProjectTitle = styled.h4`
  font-size: var(--font-24);
  line-height: var(--line-height-sm);
  margin-bottom: 1rem;
`;

const ProjectTitleLink = styled.a``;

const ProjectDescription = styled.div`
  margin-bottom: 2rem;
  p {
    font-size: var(--font-16);
    line-height: var(--line-height-sm);
  }
`;

const CardFooter = styled.div`
  margin-top: auto;
`;

const ProjectTechList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

const ProjectTechListItem = styled.li`
  font-size: var(--font-14);
  font-weight: lighter;
`;

export default ProjectCard;
