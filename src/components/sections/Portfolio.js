import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { PortfolioSection } from "../Styled/Section.styled";
import { SectionHeading } from "..";
import { IconGitHub, IconExternal } from "../icons";

const Portfolio = () => {
  return (
    <PortfolioSection>
      <SectionHeading title="Portfolio" number="01" />
      <div className="projects">
        <div className="project project--left">
          <div className="project__content">
            <p className="project__overline">Featured project</p>
            <h3 className="project__title">Ominifood</h3>
            <p className="project__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, sunt error dolores minus molestias atque eius neque,
              suscipit quisquam doloribus eum inventore itaque quidem cumque
              dolor beatae doloremque dolore et praesentium fugit? Voluptatem,
              blanditiis consequatur nesciunt inventore fugit iusto temporibus
              modi illo saepe itaque error atque eum vitae iure. Iure!
            </p>
            <ul className="project__tech-list">
              <li>VS Code</li>
              <li>Hero</li>
              <li>Express</li>
              <li>React</li>
            </ul>
            <div className="project__links">
              <a
                className="project__link"
                href="https://github.com/charlesmariga"
              >
                <IconGitHub />
              </a>
              <a
                className="project__link"
                href="https://github.com/charlesmariga"
              >
                <IconExternal />
              </a>
            </div>
          </div>
          <div className="project__img">
            <StaticImage
              src="../../assets/images/omnifood.png"
              alt="Omnifood"
              layout="fullWidth"
            />
          </div>
        </div>

        <div className="project project--right">
          <div className="project__content">
            <p className="project__overline">Featured project</p>
            <h3 className="project__title">Ominifood</h3>
            <p className="project__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, sunt error dolores minus molestias atque eius neque,
              suscipit quisquam doloribus eum inventore itaque quidem cumque
              dolor beatae doloremque dolore et praesentium fugit? Voluptatem,
              blanditiis consequatur nesciunt inventore fugit iusto temporibus
              modi illo saepe itaque error atque eum vitae iure. Iure!
            </p>
            <ul className="project__tech-list">
              <li>VS Code</li>
              <li>Hero</li>
              <li>Express</li>
              <li>React</li>
            </ul>
          </div>
          <div className="project__img">
            <StaticImage
              src="./../../assets/images/omnifood.png"
              alt="Omnifood"
              layout="fullWidth"
            />
          </div>
          <div className="project__links">
            <a
              className="project__link"
              href="https://github.com/charlesmariga"
            >
              <IconGitHub />
            </a>
            <a
              className="project__link"
              href="https://github.com/charlesmariga"
            >
              <IconExternal />
            </a>
          </div>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default Portfolio;
