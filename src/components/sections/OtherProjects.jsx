import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";

import { SecondaryHeading } from "../global";
import { ProjectCard } from "..";
import { usePreferredReducedMotion } from "../../hooks";

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
        sort: { order: DESC, fields: frontmatter___date }
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
      {prefersReducedMotion ? (
        <>
          <SecondaryHeading title="Other projects worth a mention" />
          <ArchiveLinkContainer>
            <Link to="/archive" className="archive-link">
              View the archive
            </Link>
          </ArchiveLinkContainer>
        </>
      ) : (
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          viewport={{ once: true }}
          style={{ opacity: 0 }}
        >
          <SecondaryHeading title="Other projects worth a mention" />
          <ArchiveLinkContainer>
            <Link to="/archive" className="archive-link">
              View the archive
            </Link>
          </ArchiveLinkContainer>
        </motion.div>
      )}

      <OtherProjectsCardsContainer>
        {prefersReducedMotion ? (
          <>
            {projectsToShow.length &&
              projectsToShow.map((project, index) => (
                <ProjectCard project={project} key={index} />
              ))}
          </>
        ) : (
          <>
            {projectsToShow.length &&
              projectsToShow.map((project, index) => (
                <motion.div
                  className="card-motion-div"
                  whileInView={{ opacity: [0, 1], y: [40, 0] }}
                  transition={{
                    delay: `${0.1 * index}`,
                    duration: 0.5,
                    ease: [0.645, 0.045, 0.355, 1],
                  }}
                  key={index}
                  viewport={{ once: true }}
                  style={{ opacity: 0 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
          </>
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

const ArchiveLinkContainer = styled.div`
  text-align: center;
  margin: 3rem 4rem;

  .archive-link {
    &:link,
    &:visited,
    &:active {
      display: inline-block;
      text-align: center;
      color: var(--primary);
      text-decoration: underline;
      margin: 0 auto;
    }
  }
`;

const OtherProjectsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 5rem;

  @media screen and (${({ theme }) => theme.bp.desktopXS}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column: 1 / -1;
  }

  @media screen and (${({ theme }) => theme.bp.tabletS}) {
    grid-template-columns: 1fr;
    grid-column: 1 / -1;
  }

  .card-motion-div {
    display: flex;
    opacity: 0;
  }
`;

const ShowMoreButton = styled.button`
  margin: 0 auto;
  display: block !important;
  margin-top: 8rem;
`;

export default OtherProjects;
