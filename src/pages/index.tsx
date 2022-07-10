import React from "react";
import { Layout } from "../components/layouts";
import { PageProps } from "gatsby";
import { Hero, About, Portfolio, Contact } from "../components/sections";

export default function Home({ location }: PageProps) {
  return (
    <Layout location={location} page="home">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  );
}
