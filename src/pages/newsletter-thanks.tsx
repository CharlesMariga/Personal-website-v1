import { PageProps } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../components/layouts";
import { Thanks } from "../components/sections";

const newsletterThanks = ({ location }: PageProps) => {
  return (
    <Layout location={location} page="newsletter-thanks">
      <Helmet title="Newsletter Thanks" />
      <Thanks />
    </Layout>
  );
};

export default newsletterThanks;
