import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { Link } from "gatsby";

import { PageLayout } from "../../components/layouts/page-layout";
import { DynamicHead } from "../../components/head/dynamic-head";

import {
  contentContainer,
  exampleImage,
  exampleImages,
  quoteButton,
} from "./gutter-cleaning.module.css";

import background from "../../assets/images/service-bg.png";

export default function GutterCleaning() {
  return (
    <PageLayout pageTitle="Gutter Cleaning" bannerImage={background} bannerHeight="50vh">
      <div className={contentContainer}>
        <h2>Gutter Cleaning</h2>
        <p>Yes you heard that correctly. We are the only gutter guard company offering exterior gutter cleaning. This is an unsafe, dirty and wet project that no one wants to do. So we are pleased to offer it now. Would you want your project with new gutter guards to be done and then to still look at those ugly tiger strips and moldy gutters? That's what we have heard from customers over the years that simply thought that was part of the project. Because at the sale they were told that their gutters would be completely cleaned out. The point is the gutters are cleaned from the inside only in gutter guard installs. However Illinois Gutter Guys now offers the extra option to clean those nasty neglected gutters on the exterior as well. Now you won't have to search for several contractors who will do the work and hire them. We will do it for you if you desire. Stay off the ladder, let the pros do it for you.</p>
        <div className={exampleImages}>
          <StaticImage
            alt="uWu She's filthy."
            src="../../assets/images/moldy-gutter.jpg"
            className={exampleImage}
          />
          <StaticImage
            alt="Gutter bukkake."
            src="../../assets/images/pressure-wash-roof.jpg"
            className={exampleImage}
          />
          <StaticImage
            alt="Shingle bukkake."
            src="../../assets/images/painted-gutter.jpg"
            className={exampleImage}
          />
        </div>
        <div className={quoteButton}>
          <Link to="/contact">Get A Quote</Link>
        </div>
      </div>
    </PageLayout>
  )
}

export const Head = () => <DynamicHead pageTitle="Gutter Cleaning"/>