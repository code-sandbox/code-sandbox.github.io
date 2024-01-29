import * as React from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { DynamicHead } from "../../components/head/dynamic-head";
import { PageLayout } from "../../components/layouts/page-layout";

import { 
  aboutContainer,
  aboutContent,
  aboutImage,
  aboutPanelC,
  aboutPanelL,
  aboutPanelR,
  quoteButton,
} from "./about.module.css";

import background from "../../assets/images/service-bg.png";

export default function AboutUs() {
  const imageSize = 550;
  return (
    <PageLayout pageTitle="About Us" bannerImage={background} bannerHeight="50vh">
      <div className={aboutContainer}>
        <div className={aboutPanelL}>
          <StaticImage
            alt="A man cleaning debris out of a gutter."
            src="../../assets/images/abt-img.png"
            className={aboutImage}
            width={imageSize}
            height={imageSize}
          />
          <div className={aboutContent}>
            <h2>About Us</h2>
            <p>Illinois Gutter Guys was founded when the two owners worked their way the top of the ladder in sales for the largest gutter company in America. Frustrated with high pressure sales technics and pricing they decided to build a business tackling the business with a niche. IGG was developed with the customer in mind. Because of doing what we have done for so many years, we have learned how to give the customers one service no other company does. After finishing a job with brand new gutter guards IGG offers customers exterior gutter cleaning as well. Instead of customers having to find and get quotes for cleaning / pressure washing we offer it as an upgrade to complete the job. We use only seasoned installation crews and create the fairest pricing all around. We both want the customers to have the best possible experience with our process.</p>
          </div>
        </div>
        <div className={aboutPanelC}>
          <p>With a dream of raising the bar for customer service, they launched IGG. One focused on managing the crews and project development. In the past he also learned a tremendous amount about customer frustrations and how to meet expectations. The other has focused on customer experience, online marketing, and building the network of trusted partners. His ambition was to make sales calls and be able to provide a fair and comfortable estimate on every project and give the consumer back the power to make the best decision.</p>
        </div>
        <div className={aboutPanelR}>
          <StaticImage
            alt="A man pressure washing a gutter system."
            src="../../assets/images/p8.png"
            className={aboutImage}
            width={imageSize}
            height={imageSize}
          />
          <div className={aboutContent}>
            <h2>Our Vision</h2>
            <p>Both owners shared a vision of making home maintenance better for everyone. They knew that while home ownership is supposed to be a joy, it often becomes a tireless cycle of repairs and improvements. Today, IGG has expanded from doing jobs to also connecting vetted consumers with vetted contractors to help more people. We discovered so many homeowners have needs beyond our area or even projects that require special equipment, approvals, or licenses. We aim to help them all with courteous service, expertise and commitment to a mission of taking the difficulty out of property management so you can enjoy your home. Customer satisfaction is priority #1 for us.</p>
          </div>
        </div>
        <div className={quoteButton}>
          <Link to="/contact">Get A Quote</Link>
        </div>
      </div>
    </PageLayout>
  )
}

export const Head = () => <DynamicHead pageTitle="About Us"/>