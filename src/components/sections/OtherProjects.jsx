import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SecondaryHeading } from "../global";
import { ProjectCard } from "..";
import { graphql, useStaticQuery } from "gatsby";
import { usePreferredReducedMotion } from "../../hooks";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const prefersReducedMotion = usePreferredReducedMotion();

  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { showInProjects: { eq: true } }
        }
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            external
            tech
            github
            title
            showInProjects
          }
          html
        }
      }
    }
  `);

  const gridLimit = 6;
  const projects = allMarkdownRemark.nodes;
  const firstSixProjects = projects.slice(0, gridLimit);
  const projectsToShow = showMore ? projects : firstSixProjects;

  useEffect(() => {
    if (prefersReducedMotion) return;
  }, [prefersReducedMotion]);

  return (
    <OtherProjectsWrap>
      <SecondaryHeading title="Other projects worth a mention" />
      <OtherProjectsCardsContainer>
        {prefersReducedMotion ? (
          <>
            {projectsToShow.length &&
              projectsToShow.map((project, index) => (
                <ProjectCard project={project} key={index} />
              ))}
          </>
        ) : (
          <TransitionGroup component={null} in={false}>
            {projectsToShow.length &&
              projectsToShow.map((project, index) => (
                <CSSTransition
                  key={index}
                  classNames="fadeup"
                  timeout={index > gridLimit ? (index - gridLimit) * 300 : 300}
                  exit={false}
                >
                  <ProjectCard
                    project={project}
                    style={{
                      transitionDelay: `${
                        index >= gridLimit ? (index - gridLimit) * 100 : 0
                      }ms`,
                    }}
                  />
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </OtherProjectsCardsContainer>
      {projects.length > 6 && (
        <ShowMoreButton
          className="btn btn--full"
          onClick={() => setShowMore(!showMore)}
        >
          Show {showMore ? "Less" : "More"}
        </ShowMoreButton>
      )}
    </OtherProjectsWrap>
  );
};

const OtherProjectsWrap = styled.div`
  padding: 6rem 0;
`;

const OtherProjectsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 5rem;

  @media screen and (${({ theme }) => theme.bp.desktopS}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const ShowMoreButton = styled.button`
  margin: 0 auto;
  display: block;
  margin-top: 8rem;
`;

export default OtherProjects;
