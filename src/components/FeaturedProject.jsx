import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const FeaturedProject = ({ project }) => {
  const { frontmatter, html } = project;
  const { external, title, tech, github, cover, cta } = frontmatter;
  const image = getImage(cover);

  return (
    <StyledProject>
      <ProjectContent>
        <ProjectOverline>Featured Project</ProjectOverline>
        <ProjectTitle>
          <a href={external} target="_blank" rel="noreferrer noopener">
            {title}
          </a>
        </ProjectTitle>
        <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
        {tech.length && (
          <ProjectTechList>
            {tech.map((item, i) => (
              <ProjectTechListItem key={i}>{item}</ProjectTechListItem>
            ))}
          </ProjectTechList>
        )}
        <ProjectLinks>
          {cta && (
            <CtaLink href={cta} target="_blank" rel="noreferrer noopener">
              Learn More
            </CtaLink>
          )}
          {github && (
            <GithubLink href={github} target="_blank" rel="noreferrer noopener">
              <Icon name="GitHub" />
            </GithubLink>
          )}
          {external && !cta && (
            <ExternalLink
              href={external}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name="External" />
            </ExternalLink>
          )}
        </ProjectLinks>
      </ProjectContent>
      <ProjectImage>
        <ProjectImageLink
          href={external ? external : github ? github : "#"}
          target="_blank"
          rel="noreferrer noopener"
        >
          <GatsbyImage image={image} alt={title} className="img" />
        </ProjectImageLink>
      </ProjectImage>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);

  &:not(:last-child) {
    margin-bottom: 10rem;
  }
`;

const ProjectContent = styled.div`
  grid-column: 1 / 7;
  grid-row: 1 / -1;

  @media screen and (${({ theme }) => theme.bp.desktopS}) {
    grid-column: 1 / 9;
  }
`;

const ProjectOverline = styled.p`
  margin: 10px 0;
  color: var(--primary);
  font-weight: 400;
`;

const ProjectTitle = styled.h3`
  font-size: var(--font-36);
  margin-bottom: 2rem;

  a {
    &:link,
    &:visited {
      color: var(--white);
      letter-spacing: var(--letter-spacing-md);
    }

    &:hover,
    &:active {
      color: var(--primary);
    }
  }
`;

const ProjectDescription = styled.div`
  padding: 2.5rem;
  background-color: var(--primary);
  border-radius: var(--border-radius-default);
  line-height: var(--line-height-sm);
  z-index: 2;
`;

const ProjectTechList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  z-index: 2;
  margin: 2.5rem 0 1rem;
  gap: 2rem;
`;

const ProjectTechListItem = styled.li`
  font-size: var(--font-16);
  font-weight: var(--font-weight-sm);
`;

const ProjectLinks = styled.div`
  display: flex;

  gap: 2rem;
`;

const CtaLink = styled.a``;

const GithubLink = styled.a`
  color: var(--white);
  margin-top: 1rem;

  &:hover {
    color: var(--primary);
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const ExternalLink = styled(GithubLink)``;

const ProjectImage = styled.div`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: -1;
`;

const ProjectImageLink = styled.a`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;

export default FeaturedProject;
