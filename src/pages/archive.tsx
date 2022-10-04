import React from "react";
import { Helmet } from "react-helmet";
import { graphql, PageProps } from "gatsby";

import { Layout } from "../components/layouts";
import { Archive } from "../components/sections";
import { Project } from "../interfaces/Project.interface";

interface DataProps {
  allMarkdownRemark: {
    nodes: Project[];
  };
}

const archive = ({ location, data }: PageProps<DataProps>) => {
  return (
    <Layout location={location} page="archive">
      <Helmet title="Archive" />
      <Archive data={data.allMarkdownRemark.nodes || []} />
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
