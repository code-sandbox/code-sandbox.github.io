import * as React from "react";

import { BrandLogo } from "../brand-logo/brand-logo";
import { BrandFooter } from "../brand-footer/brand-footer";
import { Navbar } from "../navbar/navbar";

import {
  container,
  heading,
} from "./page-layout.module.css";

import background from "../../assets/images/banner.png";

// TODO: GraphQL driven headerImage & pageTitle selection
export const PageLayout = ({ bannerImage, bannerHeight, pageTitle, children }) => (
  <div className={container} style={{ 
      backgroundImage: `url(${bannerImage ? bannerImage : background})`, 
      height: bannerHeight ? bannerHeight : "115vh" 
    }}>
    <BrandLogo />
    <Navbar />
    <main>
      {pageTitle ? <h1 className={heading}>{pageTitle}</h1> : <></>}
      {children}
    </main>
    <BrandFooter />
  </div>
);
