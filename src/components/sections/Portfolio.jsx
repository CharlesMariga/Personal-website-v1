import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { SectionHeading } from "..";
// import { IconGitHub, IconExternal } from "../icons";
import styled from "styled-components";
import { SectionWrap } from "../layouts";
import { graphql, useStaticQuery } from "gatsby";
import FeaturedProject from "../FeaturedProject";

const Portfolio = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
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
      </PortfolioSection>
    </SectionWrap>
  );
};

const PortfolioSection = styled.div`
  padding: 6rem 0;
`;

export default Portfolio;
