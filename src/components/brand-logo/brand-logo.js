import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { Link } from "gatsby";

import { brandLogo } from "./brand-logo.module.css";

export const BrandLogo = () => {
  return (
    <div className={brandLogo}>
      <Link to="/">
        <StaticImage 
          src="../../assets/images/ILLINOIS-GUTTER-GUYS-LOGO-UPDATED.png"
          alt="Brand logo"
          width={300}
          formats={["auto", "webp"]}
        />
      </Link>
    </div>
  )
};