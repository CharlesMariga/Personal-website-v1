import React from "react";
import { PortfolioSection } from "../Styled/Section.styled";
import { SectionHeading } from "..";

const Portfolio = () => {
  return (
    <PortfolioSection>
      <SectionHeading title="Portfolio" number="01" />
      <div className="portfolios">
        <div className="portfolio portfolio--left">
          <div className="portfolio__content">
            <p className="portfolio__overline">Featured project</p>
            <h3 className="portfolio__title">Ominifood</h3>
            <p className="portfolio__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, sunt error dolores minus molestias atque eius neque,
              suscipit quisquam doloribus eum inventore itaque quidem cumque
              dolor beatae doloremque dolore et praesentium fugit? Voluptatem,
              blanditiis consequatur nesciunt inventore fugit iusto temporibus
              modi illo saepe itaque error atque eum vitae iure. Iure!
            </p>
            <ul className="portfolio__tech-list">
              <li>VS Code</li>
              <li>Hero</li>
              <li>Express</li>
              <li>React</li>
            </ul>
          </div>
          <div className="portfolio__img"></div>
        </div>

        <div className="portfolio portfolio--right">
          <div className="portfolio__content">
            <p className="portfolio__overline">Featured project</p>
            <h3 className="portfolio__title">Ominifood</h3>
            <p className="portfolio__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, sunt error dolores minus molestias atque eius neque,
              suscipit quisquam doloribus eum inventore itaque quidem cumque
              dolor beatae doloremque dolore et praesentium fugit? Voluptatem,
              blanditiis consequatur nesciunt inventore fugit iusto temporibus
              modi illo saepe itaque error atque eum vitae iure. Iure!
            </p>
            <ul className="portfolio__tech-list">
              <li>VS Code</li>
              <li>Hero</li>
              <li>Express</li>
              <li>React</li>
            </ul>
          </div>
          <div className="portfolio__img"></div>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default Portfolio;
