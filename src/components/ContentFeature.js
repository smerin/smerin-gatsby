import React from "react";
import * as style from "./ContentFeature.module.scss";

export const ContentFeature = ({ children }) => {
  return <div className={style.feature}>{children}</div>;
};
