import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: var(--font-62);
    line-height: var(--line-height-md);
    font-weight: var(--font-weight-semi-bold);
    display: inline-block;
    background-image: linear-gradient(to right, var(--white), var(--primary));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-top: 1.6rem;

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: var(--font-52);
    }

    @media (${({ theme }) => theme.bp.mobileL}) {
      font-size: var(--font-44);
    }
  }

  h3 {
    color: var(--primary);
    line-height: var(--line-height-sm);

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: var(--font-20);
    }
  }

  h4 {
    font-size: var(--font-52);
    margin-top: 1.2rem;

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: var(--font-36);
    }
  }

  p {
    margin-top: 2rem;
    max-width: 54rem;
    /* font-size: var(--font-16); */
    line-height: var(--line-height-md);
  }

  .btn {
    margin-top: 4.8rem;
  }
`;

export const AboutSection = styled.section`
  padding: 10rem 0;
`;

export const PortfolioSection = styled.section`
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
