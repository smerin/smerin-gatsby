import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
import {
  FaArrowRight,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook
} from "react-icons/fa";
import * as style from "./Buttons.module.scss";

export const LinkButton = ({ alt, url, children }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <Link className={className} to={url} target="blank">
      <span className={style.icon}>
        <FaArrowRight />
      </span>
      {children}
    </Link>
  );
};

export const EmailButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a className={className} href="mailto:mail@smerin.com" target="_blank">
      <span className={style.icon}>
        <FaEnvelope />
      </span>
      Email
    </a>
  );
};

export const LinkedinButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a
      className={className}
      href="https://uk.linkedin.com/in/smerin"
      target="_blank"
      rel="noopener"
    >
      <span className={style.icon}>
        <FaLinkedin />
      </span>
      LinkedIn
    </a>
  );
};

export const TwitterButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a
      className={className}
      href="https://twitter.com/smerindigital"
      target="_blank"
      rel="noopener"
    >
      <span className={style.icon}>
        <FaTwitter />
      </span>
      Twitter
    </a>
  );
};

export const InstagramButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a
      className={className}
      href="https://www.instagram.com/smerin/"
      target="_blank"
      rel="noopener"
    >
      <span className={style.icon}>
        <FaInstagram />
      </span>
      Instagram
    </a>
  );
};

export const YoutubeButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a
      className={className}
      href="https://www.youtube.com/smerin"
      target="_blank"
      rel="noopener"
    >
      <span className={style.icon}>
        <FaYoutube />
      </span>
      YouTube
    </a>
  );
};

export const FacebookButton = ({ alt }) => {
  const className = cx(style.button, {
    [style.alt]: alt
  });
  return (
    <a
      className={className}
      href="https://www.facebook.com/smerin"
      target="_blank"
      rel="noopener"
    >
      <span className={style.icon}>
        <FaFacebook />
      </span>
      Facebook
    </a>
  );
};
