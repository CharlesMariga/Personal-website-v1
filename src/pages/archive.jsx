import React from "react";

import { Layout } from "../components/layouts";
import { Archive } from "../components/sections";

const archive = ({ location }) => {
  return (
    <Layout location={location}>
      <Archive />
    </Layout>
  );
};

export default archive;
