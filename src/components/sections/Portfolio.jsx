import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { SectionHeading } from "..";
// import { IconGitHub, IconExternal } from "../icons";
import styled from "styled-components";
import { SectionWrap } from "../layouts";
import { graphql, useStaticQuery } from "gatsby";

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
            cover
          }
          html
        }
      }
    }
  `);

  const data = allMarkdownRemark.nodes;

  console.log("Data: ", data);
  return (
    <SectionWrap idName="portfolio">
      <PortfolioSection id="portfolio">
        <SectionHeading title="Portfolio" number="02" />
      </PortfolioSection>
    </SectionWrap>
  );
};

const PortfolioSection = styled.section`
  padding: 6rem 0;
`;

export default Portfolio;
