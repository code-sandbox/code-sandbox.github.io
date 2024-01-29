import * as React from "react";

// import { Link } from "gatsby";

import {
  attribution,
  copyright,
  socialLinksList,
  socialLinksListItem,
} from "./site-attribution.module.css";

export const SiteAttribution = () => {
  return (
    <div className={attribution}>
      <div className={copyright}>Copyright © Illinois Gutter Guys 2024. All Rights Reserved</div>
      <ul className={socialLinksList}>
        <li className={socialLinksListItem}>
          <i className="fa-solid fa-brands fa-facebook"></i>
        </li>
        <li className={socialLinksListItem}>
          <i className="fa-solid fa-brands fa-tiktok"></i>
        </li>
        <li className={socialLinksListItem}>
          <i className="fa-solid fa-brands fa-instagram"></i>
        </li>
        <li className={socialLinksListItem}>
          <i className="fa-solid fa-brands fa-linkedin"></i>
        </li>
      </ul>
    </div>
  );
};