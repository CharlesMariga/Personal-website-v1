import React from "react";
import styled from "styled-components";
import { SectionWrap } from "../layouts";
import { graphql, useStaticQuery } from "gatsby";
import { SectionHeading } from "../global";
import { FeaturedProject } from "..";
import { OtherProjects } from ".";

const Portfolio = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            date
            external
            github
            title
            tech
            cover {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                )
              }
            }
          }
          html
        }
      }
    }
  `);

  const data = allMarkdownRemark.nodes;

  return (
    <SectionWrap idName="portfolio">
      <PortfolioSection id="portfolio">
        <SectionHeading title="Portfolio" number="02" />
        {data.map((node, index) => (
          <FeaturedProject project={node} key={index} />
        ))}
        <OtherProjects />
      </PortfolioSection>
    </SectionWrap>
  );
};

const PortfolioSection = styled.div`
  padding: 6rem 0;
`;

export default Portfolio;
