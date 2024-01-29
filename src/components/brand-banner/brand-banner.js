import * as React from "react";

import {
  useStaticQuery, 
  graphql 
} from "gatsby";

import { ContactCard } from "../contact-card/contact-card";
import { QuickLinks } from "../quick-links/quick-links";

import {
  brandBanner,
  bannerCard,
  bannerTitle,
  siteTitle,
} from "./brand-banner.module.css";

export const BrandBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata { title }
      }
    }
  `);

  return (
    <div className={brandBanner}>
      <div className={bannerCard}> 
        <div className={bannerTitle}>Quick Links</div>
        <QuickLinks />
      </div>
      <div className={siteTitle}>{data.site.siteMetadata.title}</div>
      <div className={bannerCard}>
        <div className={bannerTitle}>Contact Us</div>
        <ContactCard />
      </div>
    </div>
  );
};