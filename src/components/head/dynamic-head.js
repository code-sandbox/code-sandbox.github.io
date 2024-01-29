import * as React from "react";

import { Fonts } from "./fonts";
import { Icons } from "./icons";
import { Seo } from "./seo";

export const DynamicHead = ({ pageTitle }) => {
  return (
    <>
      <Fonts />
      <Seo pageTitle={pageTitle}/>
      <Icons />
    </>
  )
};