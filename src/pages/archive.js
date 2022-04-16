import React from "react";
import { Helmet } from "react-helmet";

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

// export const query = graphql`
//   {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/projects/" } }
//       sort: { order: ASC, fields: frontmatter___date }
//     ) {
//       nodes {
//         frontmatter {
//           company
//           date
//           external
//           tech
//           github
//           title
//           playstore
//         }
//         html
//       }
//     }
//   }
// `;

export default archive;
