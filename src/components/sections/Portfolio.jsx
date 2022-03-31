import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { SectionHeading } from "..";
import { IconGitHub, IconExternal } from "../icons";
import styled from "styled-components";

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

const PortfolioSection = styled.section`
  padding: 10rem 0;

  .projects {
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }

  .project {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    &__content {
      z-index: 10;

      @media screen and (${({ theme }) => theme.bp.tabletL}) {
        grid-column: 1 / -1 !important;
        background-color: var(--primary-dark);
        opacity: 0.95;
        height: 100%;
      }
    }

    &__img {
      @media screen and (${({ theme }) => theme.bp.tabletL}) {
        grid-column: 1 / -1 !important;
      }
    }

    &__overline {
      margin: 1rem 0;
      font-weight: var(--font-weight-sm);
      letter-spacing: var(--letter-spacing-md);
      color: var(--primary-light);
    }

    &__title {
      font-size: var(--font-36);
      margin-bottom: 2rem;

      &:hover {
        color: var(--primary-light);
        transition: var(--transition);
      }
    }

    &__description {
      color: white;
      padding: 2.5rem;
      background-color: var(--primary-dark);
      opacity: 0.95;
      backdrop-filter: blur(24px);
      border-radius: var(--border-radius-default);

      @media screen and (${({ theme }) => theme.bp.tabletL}) {
        background-color: transparent;
        opacity: 1;
      }

      &::selection {
        background-color: var(--white);
        color: var(--primary-dark);
      }
    }

    &__tech-list {
      margin: 2.5rem 1rem;
      list-style: none;
      display: flex;
    }

    &__links {
      display: flex;
      gap: 1.5rem;
    }

    &__link {
      display: inline-flex;
      width: 2rem;
      height: 2rem;
      color: var(--white);
      transition: var(--transition);

      &:hover {
        color: var(--primary);
      }
    }

    &--left {
      text-align: right;
      .project__content {
        grid-column: 7 / -1;
        grid-row: 1 / -1;
      }

      .project__img {
        grid-column: 1 / 8;
        grid-row: 1 / -1;
      }

      .project__tech-list {
        justify-content: flex-end;
        gap: 1.5rem;
      }

      .project__links {
        justify-content: flex-end;
      }
    }

    &--right {
      .project__content {
        grid-column: 1 / 7;
        grid-row: 1 / -1;
      }

      .project__img {
        grid-column: 6 / -1;
        grid-row: 1 / -1;
      }

      .project__tech-list {
        justify-content: flex-start;
        gap: 1.5rem;
      }

      .project__links {
        justify-content: flex-start;
      }
    }
  }
`;

export default Portfolio;
