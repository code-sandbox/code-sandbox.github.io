import * as React from "react";

import { Link } from "gatsby";

import { PageLayout } from "../../components/layouts/page-layout";
import { DynamicHead } from "../../components/head/dynamic-head";

import {
  contentContainer,
  quoteButton,
} from "./maintenance-and-repair.module.css";

import background from "../../assets/images/service-bg.png";

export default function MaintenanceAndRepair() {
  return (
    <PageLayout pageTitle="Maintenance & Repair" bannerImage={background} bannerHeight="50vh">
      <div className={contentContainer}>
        <h2>Maintenance &amp; Repair</h2>
        <p>Maintaining and repairing your gutters is necessary because gutters that are non-functional can cause damage to your home. Gutters should be regularly maintained depending on the amount of trees around your house as well as the type of roofing materials on your home.</p>
        <p>Illinois Gutter Guys gutter guard warranty is different from other company warranties because it truly means that you will never have to worry about gutter cleaning ever again.  When you choose to purchase with IGG, you will be a part of the IGG family and we will take care your homes needs. We want you to be comfortable and confident with your purchase. To us, you're not just a number, you're a part of the IGG Family.</p>
        <p>From Insects, birds, shingle grit, leaves, pine needles and squirrels your gutters you will feel so much safer. We know you will feel so much safer as well by staying off of your ladder. We will give you in writing a guarantee that this will be that last time you will have to clean out your gutters again.</p>
        <p>Please fill out the form to have someone from IGG to reach out and set up a free gutter inspection. Call to set up an appointment as well.</p>
        <div className={quoteButton}>
          <Link to="/contact">Get A Quote</Link>
        </div>
      </div>
    </PageLayout>
  )
}

export const Head = () => <DynamicHead pageTitle="Maintenance & Repair"/>