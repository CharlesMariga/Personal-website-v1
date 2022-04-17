import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

import styled from "styled-components";
import Icon from "./Icon";
import { lightSelection } from "../styles/mixins";

const FeaturedProject = ({ project }) => {
  const { frontmatter, html } = project;
  const { external, title, tech, github, cover, cta } = frontmatter;
  const image = getImage(cover);

  return (
    <StyledProject>
      <ProjectContent className="project-content">
        <ProjectOverline className="project-overline">
          Featured Project
        </ProjectOverline>
        <ProjectTitle className="project-title">
          <a href={external} target="_blank" rel="noreferrer">
            {title}
          </a>
        </ProjectTitle>
        <ProjectDescription
          dangerouslySetInnerHTML={{ __html: html }}
          className="project-description"
        />
        {tech.length && (
          <ProjectTechList className="project-tech-list">
            {tech.map((item, i) => (
              <ProjectTechListItem key={i}>{item}</ProjectTechListItem>
            ))}
          </ProjectTechList>
        )}
        <ProjectLinks className="project-links">
          {cta && (
            <CtaLink href={cta} target="_blank" rel="noreferrer">
              Learn More
            </CtaLink>
          )}
          {github && (
            <GithubLink href={github} target="_blank" rel="noreferrer">
              <Icon name="GitHub" />
            </GithubLink>
          )}
          {external && !cta && (
            <ExternalLink href={external} target="_blank" rel="noreferrer">
              <Icon name="External" />
            </ExternalLink>
          )}
        </ProjectLinks>
      </ProjectContent>
      <ProjectImage className="project-image">
        <ProjectImageLink
          href={external ? external : github ? github : "#"}
          target="_blank"
          rel="noreferrer"
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
  align-items: center;

  @media screen and (${({ theme }) => theme.bp.tabletL}) {
    box-shadow: var(--box-shadow-sm);
  }

  &:not(:last-child) {
    margin-bottom: 10rem;

    @media screen and (${({ theme }) => theme.bp.tabletL}) {
      margin-bottom: 8rem;
    }

    @media screen and (${({ theme }) => theme.bp.mobileL}) {
      margin-bottom: 4rem;
    }
  }

  &:nth-child(odd) {
    .project-content {
      grid-column: 6 / -1;
      grid-row: 1 / -1;

      @media screen and (${({ theme }) => theme.bp.desktopXS}) {
        grid-column: 1 / -1;
      }
    }

    .project-image {
      grid-column: 1 / 8;
      grid-row: 1 / -1;
      text-align: right;

      @media screen and (${({ theme }) => theme.bp.desktopXS}) {
        grid-column: 1 / -1;
      }
    }

    .project-overline,
    .project-title,
    .project-description {
      text-align: right;

      @media screen and (${({ theme }) => theme.bp.desktopXS}) {
        text-align: left;
      }
    }

    .project-tech-list,
    .project-links {
      justify-content: flex-end;

      @media screen and (${({ theme }) => theme.bp.desktopXS}) {
        justify-content: flex-start;
      }
    }
  }
`;

const ProjectContent = styled.div`
  grid-column: 1 / 8;
  grid-row: 1 / -1;
  z-index: 1;

  @media screen and (${({ theme }) => theme.bp.desktopS}) {
    grid-column: 1 / 8;
  }

  @media screen and (${({ theme }) => theme.bp.desktopXS}) {
    grid-column: 1 / -1;
    padding: 4rem 4rem 3rem;
    text-align: left;
    background-color: var(--bg-primary-dark);
    border-radius: var(--border-radius-md);
    opacity: 0.9;
    width: 100%;
    height: 100%;
  }

  @media screen and (${({ theme }) => theme.bp.mobileL}) {
    padding: 2.5rem 2.5re 2rem;
  }
`;

const ProjectOverline = styled.p`
  margin: 10px 0;
  color: var(--primary);
  font-weight: 400;

  @media screen and (${({ theme }) => theme.bp.desktopS}) {
    color: var(--white);
    ${lightSelection}
  }
`;

const ProjectTitle = styled.h3`
  font-size: var(--font-36);
  margin-bottom: 2rem;
  transition: var(--transition);

  a {
    &:link,
    &:visited {
      color: var(--white);
      letter-spacing: var(--letter-spacing-md);
    }

    &:hover,
    &:active {
      color: var(--primary-light);
    }
  }
`;

const ProjectDescription = styled.div`
  padding: 2.5rem;
  border-radius: var(--border-radius-default);
  line-height: var(--line-height-md);
  font-size: var(--font-16);
  opacity: 0.95;
  background-color: var(--bg-primary-light);
  backdrop-filter: blur(120px);
  overflow: hidden;

  @media screen and (${({ theme }) => theme.bp.desktopXS}) {
    background-color: transparent;
    padding: 0;
    border-radius: 0;

    p {
      ${lightSelection}
    }
  }
`;

const ProjectTechList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2.5rem 0 1rem;
  gap: 2rem;
`;

const ProjectTechListItem = styled.li`
  font-size: var(--font-16);
  font-weight: var(--font-weight-sm);

  @media screen and (${({ theme }) => theme.bp.desktopXS}) {
    ${lightSelection}
  }
`;

const ProjectLinks = styled.div`
  display: flex;

  gap: 2rem;
`;

const CtaLink = styled.a``;

const GithubLink = styled.a`
  color: var(--white);
  margin-top: 1rem;
  transition: var(--transition);

  &:hover {
    color: var(--primary);

    @media screen and (${({ theme }) => theme.bp.desktopXS}) {
      color: var(--black);
    }
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
  height: 100%;
  width: 100%;

  @media screen and (${({ theme }) => theme.bp.desktopXS}) {
    grid-column: 1 / -1;
    border-radius: var(--border-radius-md);
    overflow: hidden;
  }
`;

const ProjectImageLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: 0.5;
  transition: var(--transition);

  &:hover {
    opacity: 1;
  }

  @media screen and (${({ theme }) => theme.bp.desktopXS}) {
    opacity: 1;
  }

  .img {
    border-radius: var(--border-radius-default);
    width: 100%;
    height: 100%;

    @media screen and (${({ theme }) => theme.bp.tabletL}) {
      width: auto;
      height: 100%;
    }
  }
`;

export default FeaturedProject;
