import React from "react";
import Img from "gatsby-image";
import * as style from "./PageBanner.module.scss";

const PageBanner = ({ title, subtitle, banner }) => {
  return (
    <div className={style.banner}>
      {banner && (
        <Img fluid={banner.childImageSharp.fluid} alt={title} />
      )}
      <div className={style.bannerContent}>
        <div className="container">
          <h2 className={style.bannerTitle}>{title}</h2>
          {subtitle && <p className={style.bannerSubtitle}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
