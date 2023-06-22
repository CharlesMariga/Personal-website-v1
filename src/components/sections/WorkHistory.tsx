import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { usePreferredReducedMotion } from "../../hooks";
import { Job } from "../../interfaces/Job.interface";
import { SectionHeading } from "../global";

export default function WorkHistory() {
  const [activeTabId, setActiveTabId] = useState(0);
  const prefersReducedMotion = usePreferredReducedMotion();

  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            date
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
  `);

  const jobs = allMarkdownRemark.nodes as Job[];

  const WorkHistoryContent = (
    <>
      <SectionHeading title="Where I've worked" number="03" />
      <TabGroup>
        <TabList>
          {jobs?.map((job, index) => {
            const { company } = job.frontmatter;
            return (
              <Tab
                key={index}
                isActive={activeTabId === index}
                onClick={() => {
                  setActiveTabId(index);
                }}
                id={`tab-${index}`}
                role="tab"
              >
                {company}
              </Tab>
            );
          })}
          <StyledHighlight activeTabId={activeTabId} />
        </TabList>
        <TabPanels>
          {jobs?.map((job, index) => {
            const { html } = job;
            const { title, company, range, url } = job.frontmatter;

            return (
              <CSSTransition
                key={index}
                in={activeTabId === index}
                timeout={250}
                classNames="fade"
              >
                <TabPanel
                  id={`pane-${index}`}
                  role="tabpanel"
                  hidden={activeTabId !== index}
                >
                  <h3>
                    <span>{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a href={url} className="inline-block">
                        {company}
                      </a>
                    </span>
                  </h3>
                  <p className="range">{range}</p>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </TabPanel>
              </CSSTransition>
            );
          })}
        </TabPanels>
      </TabGroup>
    </>
  );

  return (
    <StyledWorkHistorySection id="workHistory">
      {prefersReducedMotion ? (
        <div>{WorkHistoryContent}</div>
      ) : (
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          viewport={{ once: true }}
          style={{ opacity: 0 }}
        >
          {WorkHistoryContent}
        </motion.div>
      )}
    </StyledWorkHistorySection>
  );
}

const StyledWorkHistorySection = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  margin-bottom: 6rem;
`;

const TabGroup = styled.div`
  display: flex;

  @media screen and (${({ theme }) => theme.bp.tabletL}) {
    min-height: 340px;
  }

  @media screen and (${({ theme }) => theme.bp.tabletXS}) {
    display: block;
  }
`;

const TabList = styled.div`
  width: max-content;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (${({ theme }) => theme.bp.tabletXS}) {
    flex-direction: row;
    margin-bottom: 25px;
    border-bottom: 2px solid var(--primary-light);
    width: 100%;
    flex-wrap: wrap;
    row-gap: 12px;
  }
`;

const Tab = styled.button`
  padding: 0px 20px 2px;
  background-color: transparent;
  width: auto;
  color: var(--text-color);
  font-size: var(--font-18);
  border: none;
  height: 42px;
  text-align: left;
  border-left: 2px solid var(--primary-light);
  transition: all 250ms;
  color: ${({ isActive }: { isActive: boolean }) =>
    isActive ? "var(--primary-dark)" : "var(--text-color)"};

  &:hover {
    color: var(--primary-dark);
  }

  @media screen and (${({ theme }) => theme.bp.tabletXS}) {
    border-left: 0;
    width: 120px;
    height: auto;
    flex-shrink: 0;
  }
`;

const TabPanels = styled.div`
  width: 100%;
  margin-left: 20px;

  @media screen and (${({ theme }) => theme.bp.tabletXS}) {
    margin-left: 0;
  }
`;

const TabPanel = styled.div`
  width: 100%;
  height: 350px;
  padding: 0 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList}
  }

  h3 {
    margin-bottom: 10px;
    font-size: var(--font-24);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--primary);

      a {
        &:link,
        &:active,
        &:hover,
        &:visited {
          color: var(--primary);
        }
      }
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--primary-dark);
    font-size: var(--font-16);
    opacity: 75%;
  }

  @media screen and (${({ theme }) => theme.bp.tabletXS}) {
    height: 250px;
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 3px;
  height: 42px;
  transform: translateY(
      calc(${({ activeTabId }: { activeTabId: number }) => activeTabId} * 42px)
    )
    translateX(-20%);

  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  background-color: var(--primary-dark);

  @media screen and (${({ theme }) => theme.bp.tabletXS}) {
    top: 100%;
    left: 0;
    bottom: 0;
    width: 120px;
    height: 2px;
    transform: translateY(0)
      translateX(
        calc(
          ${({ activeTabId }: { activeTabId: number }) => activeTabId} * 120px
        )
      );
  }

  @media screen and (${({ theme }) => theme.bp.tabletXS}) {
    top: 100%;
    left: 0;
    bottom: 0;
    width: 120px;
    height: 2px;
    transform: translateY(0)
      translateX(
        calc(
          ${({ activeTabId }: { activeTabId: number }) => activeTabId} * 120px
        )
      );
  }

  @media screen and (${({ theme }) => theme.bp.tabletXS}) {
    display: none;
  }
`;
