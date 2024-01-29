import * as React from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { FullLayout } from "../components/layouts/full-layout";
import { DynamicHead } from "../components/head/dynamic-head";
import { ProjectGrid } from "../components/project-grid/project-grid";

import {
  aboutImage,
  aboutUs,
  aboutUsText,
  shortPitch,
  ourProjects,
  pitchHeader,
  projectFilters,
  pitchContent,
  quoteButton,
} from './index.module.css'

// TODO: GraphQL driven panel contents
export default function Index() {
  return (
    <FullLayout>
      <div className={shortPitch}>
        <h2 className={pitchHeader}>Illinois Gutter Guys offers the best micro mesh gutter guards and gutters with competitive pricing.</h2>
        <p className={pitchContent}>Based on decades of research and industry experience, our gutter guards are backed by a lifetime performance guarantee and will give you clog-free and leaf-free gutters for the life of your home -- <em>guaranteed</em>.<br />We know you will be completely satisfied with our work and products.  Please allow us to give you our best quote.</p>
        <div className={quoteButton}>
          <Link to="/contact">Get A Quote</Link>
        </div>
      </div>
      {/* [AboutUs] PLACEHOLDER for GraphQL integration */}
      <div className={aboutUs}>
        <StaticImage
          className={aboutImage}
          alt="Made in the U.S.A."
          src="../assets/images/about-home.jpg" />
        <div className={aboutUsText}>
          <h1>About Us</h1>
          <p>Illinois Gutter Guys was founded when the two owners worked their way the top of the ladder in sales for the largest gutter company in America. Frustrated with high pressure sales technics and pricing they decided to build a business tackling the business with a niche. IGG was developed with the customer in mind. Because of doing what we have done for so many years, we have learned how to give the customers one service no other company does. After finishing a job with brand new gutter guards IGG offers customers exterior gutter cleaning as well. Instead of customers having to find and get quotes for cleaning / pressure washing we offer it as an upgrade to complete the job. We use only seasoned installation crews and create the fairest pricing all around. We both want the customers to have the best possible experience with our process.</p>
          <div className={quoteButton} style={{ margin: 0 }}>
            <Link to="/about">Discover More</Link>
          </div>
        </div>
      </div>
      {/* /[AboutUs] PLACEHOLDER */}
      {/* [OurProjects] PLACEHOLDER for GraphQL integration */}
      <div className={ourProjects}>
        <h1>Our Projects</h1>
        <ul className={projectFilters}>
          <li>All</li>
          <li>Wisconsin</li>
          <li>Illinois</li>
          <li>Indiana</li>
        </ul>
        <ProjectGrid />
        <div className={quoteButton} style={{ margin: 0 }}>
          <Link to="/about">Discover More</Link>
        </div>
      </div>
      {/* /[OurProjects] PLACEHOLDER */}
    </FullLayout>
  )
}

export const Head = () => <DynamicHead />
