import React from "react";
import { Link } from "gatsby";
import { menuItems } from "../utils/menuItems";
import * as style from "./MainMenu.module.scss";

const MainMenu = () => (
  <nav role="navigation">
    <ul className={style.mainMenu}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default MainMenu;
