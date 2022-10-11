import React from "react";
import { Link } from "gatsby";
import MainMenu from "./MainMenu";
import logo from "../images/gs-logo.png";
import * as style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContent}>
          <div className={style.headerLogo}>
            <Link to="/">
              <img
                src={logo}
                alt="George Smerin logo"
                width="170"
                height="170"
              />
            </Link>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
