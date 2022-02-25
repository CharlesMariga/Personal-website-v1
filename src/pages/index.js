import React from "react";
import Layout from "../components/layouts/Layout";
// import MainLayout from "../components/layouts/MainLayout";
import { Hero, About } from "../components/sections";
// import { StyledBackgroundImage } from "../components";

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <Hero />
      <About />
    </Layout>
  );
}
