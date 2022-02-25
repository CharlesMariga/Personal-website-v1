import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { BackgroundContentContainer } from "./Styled/Background.styled";

const StyledBackgroundImage = ({ children }) => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile {
        nodes {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              quality: 100
            )
          }
        }
      }
    }
  `);

  const image = getImage(allFile.nodes[0]);
  const bgImage = convertToBgImage(image);
  return (
    <BackgroundImage Tag="div" {...bgImage}>
      <BackgroundContentContainer>{children}</BackgroundContentContainer>
    </BackgroundImage>
  );
};

export default StyledBackgroundImage;
