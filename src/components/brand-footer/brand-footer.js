import * as React from "react";

import { BrandBanner } from "../brand-banner/brand-banner";
import { SiteAttribution } from "../site-attribution/site-attribution";

import { brandFooter } from "./brand-footer.module.css";

export const BrandFooter = () => {
  return (
    <footer className={brandFooter}>
      <BrandBanner />
      <SiteAttribution />
    </footer>
  );
};