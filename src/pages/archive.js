import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../components/layouts";
import { Archive } from "../components/sections";

const archive = ({ location, data }) => {
  return (
    <Layout location={location}>
      <Helmet title="Archive" />
      <Archive data={data?.allMarkdownRemark?.nodes || []} />
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          company
          date
          external
          tech
          github
          title
          android
          ios
        }
        html
      }
    }
  }
`;

export default archive;
