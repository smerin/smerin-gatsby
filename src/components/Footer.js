import React from "react";
import { Link } from "gatsby";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import {
  EmailButton,
  LinkedinButton,
  InstagramButton,
  YoutubeButton,
  FacebookButton,
  TwitterButton
} from "./Buttons";
import * as style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.buttons}>
          <h3>Elsewhere on the web...</h3>
          <YoutubeButton />
          <FacebookButton />
          <InstagramButton />
          <EmailButton />
        </div>
        {/* {!hideDigital && (
          <div className={style.buttons}>
            <h3>Web development enquiries</h3>
            <EmailButton />
            <LinkedinButton />
            <TwitterButton />
          </div>
        )} */}
        <div className={style.credits}>
          This website built with ❤️ in{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noopener">
            React
          </a>{" "}
          &amp;{" "}
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener">
            Gatsby
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
