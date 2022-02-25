/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path");

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Charles Mariga",
    description:
      "Charles is a software engineer who speializes in building (and occassionaly designing) exception deigital experiences",
    siteUrl: "https://charlesmariga.com", // No trailing slash allowed
    image: "", // Path to your image you placed in the 'static' folder
    twitterUsername: "@_cmariga",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
  ],
};
