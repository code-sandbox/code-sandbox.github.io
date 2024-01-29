import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";

export const Seo = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata { title }
      }
    }
  `);
  return (
    <title>
      {
        pageTitle ? 
          `${pageTitle} | ` :
          <></>
      }{data.site.siteMetadata.title}
    </title>
  )
};
