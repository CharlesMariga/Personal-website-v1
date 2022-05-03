import React from "react";
import styled from "styled-components";
import { Layout } from "../components/layouts";
import { Link } from "gatsby";

export default function Error({ location }) {
  return (
    <Layout location={location} page="404">
      <PageNotFoundSection>
        <PageContent>
          <PageHeading>Oops! Page not found</PageHeading>
          <Text>
            The page you were looking for doesn't exist. You may have mistyped
            the address or the page may have moved.
          </Text>
          <Link to="/" className="btn btn--full">
            &larr; Back to home
          </Link>
        </PageContent>
      </PageNotFoundSection>
    </Layout>
  );
}

const PageNotFoundSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageHeading = styled.h1`
  font-weight: 200;
  margin-bottom: 3rem;
`;

const PageContent = styled.div`
  text-align: center;
  max-width: 60rem;

  &::before {
    content: "404";
    position: absolute;
    color: var(--primary);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    transform: scale(25);
    z-index: -1;
    opacity: 0.05;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Text = styled.p`
  line-height: var(--line-height-md);
  font-size: var(--font-18);
  margin-bottom: 4rem;
`;
