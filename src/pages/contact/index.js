import * as React from "react";

import { Link } from "gatsby";

import { PageLayout } from "../../components/layouts/page-layout";
import { DynamicHead } from "../../components/head/dynamic-head";

import {
  contentContainer,
  quoteButton,
} from "./contact.module.css";

import background from "../../assets/images/service-bg.png";

export default function ContactUs() {
  return (
    <PageLayout pageTitle="Contact Us" bannerImage={background} bannerHeight="50vh">
      <div className={contentContainer}>
        <h2>Contact Form Placeholder</h2>
        <div className={quoteButton}>
          <Link to="/contact">Get A Quote</Link>
        </div>
      </div>
    </PageLayout>
  )
}

export const Head = () => <DynamicHead pageTitle="Contact Us"/>