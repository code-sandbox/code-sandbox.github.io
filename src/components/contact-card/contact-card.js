import * as React from "react";

// import { Link } from "gatsby";

import {
  socialLinksList,
  socialLinksListItem,
} from "./contact-card.module.css";

export const ContactCard = () => {
  return (
    <ul className={socialLinksList}>
      <li className={socialLinksListItem}>
        <i className="fa-solid fa-map-marker"></i>
        <span>5164 E. 81st Ave. Merrillville IN 46410</span>
      </li>
      <li className={socialLinksListItem}>
        <i className="fa-solid fa-phone"></i>
        <span>262-298-2072</span>
      </li>
      <li className={socialLinksListItem}>
        <i className="fa-solid fa-envelope"></i>
        <span>support@illinoisgutterguys.com</span>
      </li>
    </ul>
  );
};