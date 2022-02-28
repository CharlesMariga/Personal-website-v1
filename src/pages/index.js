import React from "react";
import Layout from "../components/layouts/Layout";
import { Hero, Portfolio } from "../components/sections";

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <Hero />
      {/* <About /> */}
      <Portfolio />
    </Layout>
  );
}
