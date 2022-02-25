import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

export default function Head({ title, description, image }) {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          defaultImage: image
          twitterUsername
        }
      }
    }
  `);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const SEO = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={title}
      defaultTitle={SEO.title}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <html lang="en" />

      <meta name="description" content={SEO.description} />
      <meta name="image" content={SEO.image} />

      <meta property="og:title" content={SEO.title} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:image" content={SEO.image} />
      <meta property="og:url" content={SEO.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={SEO.image} />

      {/* Add google site verification */}
      {/* <meta
        name="google-site-verification"
        content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk"
      /> */}
    </Helmet>
  );
}

Head.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
