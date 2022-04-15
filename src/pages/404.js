import React from "react";
import styled from "styled-components";
import { Layout } from "../components/layouts";

export default function Error({ location }) {
  return (
    <Layout location={location} page="404">
      <PageNotFoundSection>
        <h1>404</h1>
        <h3>Page not found</h3>
      </PageNotFoundSection>
    </Layout>
  );
}

const PageNotFoundSection = styled.div``;
