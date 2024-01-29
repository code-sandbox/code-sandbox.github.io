import * as React from "react";

import { Link } from "gatsby";

import {
  quickLinkList,
  quickLinkListItem,
  quickLinkItem,
} from "./quick-links.module.css";

export const QuickLinks = () => (
  <ul className={quickLinkList}>
    <li className={quickLinkListItem}>
      <Link to="/" className={quickLinkItem}>Home</Link>
    </li>
    <li className={quickLinkListItem}>
      <Link to="/about" className={quickLinkItem}>About Us</Link>
    </li>
    <li className={quickLinkListItem}>
      <Link to="/maintenance-and-repair" className={quickLinkItem}>Maintenance &amp; Repair</Link>
    </li>
    <li className={quickLinkListItem}>
      <Link to="/projects" className={quickLinkItem}>Projects</Link>
    </li>
    <li className={quickLinkListItem}>
      <Link to="/gutter-cleaning" className={quickLinkItem}>Gutter Cleaning</Link>
    </li>
    <li className={quickLinkListItem}>
      <Link to="/contact" className={quickLinkItem}>Contact Us</Link>
    </li>
  </ul>
);