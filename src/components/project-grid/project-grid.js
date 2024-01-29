import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { 
  projectGrid, 
  projectGridImage,
} from './project-grid.module.css'

export const ProjectGrid = () => {
  return (
    <div className={projectGrid}>
      <StaticImage
        alt="Clogged gutters, full of debris."
        src="../../assets/images/1.jpg" 
        className={projectGridImage} />
      <StaticImage
        alt="New gutter guard installation."
        src="../../assets/images/2.jpg" 
        className={projectGridImage} />
      <StaticImage 
        alt="New gutter installation."
        src="../../assets/images/3.jpg" 
        className={projectGridImage} />
      <StaticImage
        alt="Gutter cleaning and maintenance."
        src="../../assets/images/4.jpg" 
        className={projectGridImage} />
      <StaticImage
        alt="Professional gutter installation."
        src="../../assets/images/p5.png" 
        className={projectGridImage} />
      <StaticImage
        alt="Service with a smile."
        src="../../assets/images/p7.png" 
        className={projectGridImage} />
    </div>
  );
};