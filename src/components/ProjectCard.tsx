import React from "react";
import styled from "styled-components";
import { Icon } from ".";

import { Project } from "./../interfaces/Project.interface";

interface Props {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<Props> = ({ project, delay }) => {
  const { github, external, title, tech } = project.frontmatter;
  const html = project.html;

  return (
    <Card delay={delay}>
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
        <ProjectTitleLink
          href={external || github}
          target="_blank"
          rel="noreferrer"
          className="project-title-link"
        >
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

const Card = styled.div<{ delay: number }>`
  position: relative;
  padding: 3.2rem 2.8rem;
  backdrop-filter: blur(120px);
  border-radius: var(--border-radius-md);
  background-color: var(--card-background-color);
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow-sm);
  transition: var(--transition);
  transition-delay: ${({ delay }) => delay};
  width: 100%;
  height: 100%;

  &:hover {
    transform: translateY(-1rem);
    box-shadow: var(--box-shadow-lg);

    .project-title-link {
      color: var(--primary);
    }
  }
`;

const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;

  svg {
    transition: var(--transition);
  }

  &:hover {
    svg {
      color: var(--primary);
    }
  }

  &.folder {
    color: var(--primary);
  }

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
  z-index: 1;
`;

const CardProjectLink = styled.a`
  display: inline-flex;
  color: var(--second-text-color);
`;

const ProjectTitle = styled.h4`
  font-size: var(--font-24);
  line-height: var(--line-height-sm);
  margin-bottom: 1rem;
  color: var(--second-text-color);
`;

const ProjectTitleLink = styled.a`
  transition: var(--transition);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:link,
  &:visited,
  &:active {
    color: var(--second-text-color);
  }
`;

const ProjectDescription = styled.div`
  margin-bottom: 2rem;
  z-index: 1;

  p {
    font-size: var(--font-16);
    line-height: var(--line-height-md);

    a {
      &:link,
      &:visited,
      &:active {
        color: var(--second-text-color);
      }

      &:hover {
        color: var(--primary);
      }
    }
  }
`;

const CardFooter = styled.div`
  margin-top: auto;
`;

const ProjectTechList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const ProjectTechListItem = styled.li`
  font-size: var(--font-14);
  font-weight: lighter;
  color: var(--second-text-color);
`;

export default ProjectCard;
