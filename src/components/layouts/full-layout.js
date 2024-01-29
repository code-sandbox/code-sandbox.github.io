import * as React from "react";

import { BrandLogo } from "../brand-logo/brand-logo";
import { BrandFooter } from "../brand-footer/brand-footer";
import { Navbar } from "../navbar/navbar";

import { container } from "./full-layout.module.css";

import background from "../../assets/images/banner.png";

// TODO: GraphQL driven headerImage & pageTitle selection
export const FullLayout = ({ children }) => (
  <div className={container} style={{ 
      backgroundImage: `url(${background})`, height: "115vh" 
    }}>
    <BrandLogo />
    <Navbar />
    <main>
      {children}
    </main>
    <BrandFooter />
  </div>
);
