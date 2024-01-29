import * as React from "react";

import { Link } from "gatsby";

import {
  navLinks,
  navLinkItem,
  navLinkText,
} from "./navbar.module.css"

export const Navbar = () => (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}><Link to="/about" className={navLinkText}>About Us</Link></li>
        <li className={navLinkItem}><Link to="/maintenance-and-repair" className={navLinkText}>Maintenance &amp; Repair</Link></li>
        <li className={navLinkItem}><Link to="/projects" className={navLinkText}>Projects</Link></li>
        <li className={navLinkItem}><Link to="/gutter-cleaning" className={navLinkText}>Gutter Cleaning</Link></li>
        <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact Us</Link></li>
      </ul>
    </nav>
);