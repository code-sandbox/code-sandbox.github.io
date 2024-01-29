import * as React from "react";

import {
  Link,
  graphql
} from "gatsby";

import { DynamicHead } from "../../components/head/dynamic-head";
import { PageLayout } from "../../components/layouts/page-layout";
import { ProjectGrid } from "../../components/project-grid/project-grid";

import {
  contentContainer,
  projectFilters,
  quoteButton,
} from "./projects.module.css";

import background from "../../assets/images/service-bg.png";

export default function ProjectIndex({ data }){
  return (
    <PageLayout pageTitle="Projects" bannerImage={background} bannerHeight="50vh">
      <div className={contentContainer}>
        <h2>Our Projects</h2>
        <div className="ourProjects">  
          <ul className={projectFilters}>
            <li>All</li>
            <li>Wisconsin</li>
            <li>Illinois</li>
            <li>Indiana</li>
          </ul>
          <ProjectGrid />
        </div>
        {/* { 
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h3>
                <Link to={`/projects/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
              </h3>
              <p>{node.frontmatter.date}</p>
            </article>
          ))
        } */}
        <div className={quoteButton}>
          <Link to="/contact">Get A Quote</Link>
        </div>
      </div>
    </PageLayout>
  )
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes { 
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export const Head = () => <DynamicHead pageTitle="Projects" />;
