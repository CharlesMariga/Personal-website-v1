import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";
import { ThemeToggle } from "..";
import { Project } from "../../interfaces/Project.interface";
import { SectionHeading, TertiaryHeading } from "../global";
import Icon from "../Icon";

interface Props {
  data: Project[];
}

const Archive: React.FC<Props> = ({ data }) => {
  const TableRowData = ({
    frontmatter: { date, title, tech, external, github, ios, playstore },
  }: Project) => (
    <>
      <TableData className="year">{new Date(date).getFullYear()}</TableData>
      <TableData className="title">{title}</TableData>
      <TableData className="build-with hide-on-mobile">
        {tech.length &&
          tech.map((item, i) => (
            <span key={i}>
              {" "}
              {item} {i !== tech.length - 1 && <span>&middot;</span>}
            </span>
          ))}
      </TableData>
      <TableData className="link">
        {external && (
          <a
            href={external}
            aria-label="External link"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="External" />
          </a>
        )}
        {github && (
          <a
            href={github}
            aria-label="GitHub link"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="GitHub" />
          </a>
        )}
        {ios && (
          <a
            href={ios}
            aria-label="GitHub link"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="AppStore" />
          </a>
        )}
        {playstore && (
          <a
            href={playstore}
            aria-label="Playstore link"
            target="_blank"
            rel="noreferrer"
            className="playstore-icon"
          >
            <Icon name="PlayStore" />
          </a>
        )}
      </TableData>
    </>
  );

  return (
    <Wrapper>
      <ThemeToggleContainer>
        <ThemeToggle />
      </ThemeToggleContainer>
      <ArchiveSection>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          viewport={{ once: true }}
        >
          <SectionHeading title="Archive" />
          <FlexContainer>
            <TertiaryHeading
              title="My long list of projects"
              className="tertiary-heading"
            />
            <Link to="/" className="back-link">
              <span>&larr;</span>
              <span>Back to home</span>
            </Link>
          </FlexContainer>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          viewport={{ once: true }}
        >
          <Table>
            <TableHeader>
              <motion.tr
                whileInView={{ opacity: [0, 1], y: [40, 0] }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.645, 0.045, 0.355, 1],
                }}
                viewport={{ once: true }}
              >
                <TableHead>Year</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hide-on-mobile">Build with</TableHead>
                <TableHead>Link</TableHead>
              </motion.tr>
            </TableHeader>
            <TableBody>
              {data.map((project, index) => {
                return (
                  <motion.tr
                    whileInView={{ opacity: [0, 1], y: [40, 0] }}
                    transition={{
                      delay: 0.5,
                      duration: 0.5,
                      ease: [0.645, 0.045, 0.355, 1],
                    }}
                    viewport={{ once: true }}
                    key={index}
                  >
                    {TableRowData(project)}
                  </motion.tr>
                );
              })}
            </TableBody>
          </Table>
        </motion.div>
      </ArchiveSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const ThemeToggleContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
`;

const ArchiveSection = styled.div`
  padding: 10rem 0;
  margin: 0 -2rem;

  @media screen and (${({ theme }) => theme.bp.tabletL}) {
    margin: 0 -1rem;
  }

  .tertiary-heading {
    font-weight: 200;
    line-height: var(--line-height-md);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;

  .back-link {
    display: flex;
    color: var(--primary);
    gap: 1rem;
    line-height: var(--line-height-md);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  color: var(--second-text-color);
`;

const TableBody = styled.tbody``;

const TableHead = styled.th`
  padding: 1rem;
  text-align: left;

  &.hide-on-mobile {
    @media screen and (${({ theme }) => theme.bp.tabletL}) {
      display: none;
    }
  }
`;

const TableData = styled.td`
  padding: 1rem;
  text-align: left;

  &.hide-on-mobile {
    @media screen and (${({ theme }) => theme.bp.tabletL}) {
      display: none;
    }
  }

  &.year {
    color: var(--second-text-color);
  }

  &.title {
    font-size: var(--font-18);
    line-height: var(--line-height-md);
  }

  &.made-at,
  &.build-with {
    font-size: var(--font-16);
    font-weight: 200;
    opacity: 0.7;
  }

  &.build-with {
    line-height: var(--line-height-md);
  }

  &.link {
    display: flex;
    align-items: center;
    gap: 2rem;

    .playstore-icon {
      svg {
        fill: currentColor;
      }
    }

    svg {
      color: var(--second-text-color);
      width: 2.5rem;
      width: 2.5rem;
      transition: var(--transition);

      &:hover {
        color: var(--primary);
      }
    }
  }
`;

export default Archive;
