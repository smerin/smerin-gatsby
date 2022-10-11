import React, { Component } from "react";
import { Link } from "gatsby";
import * as style from "./MobileMenu.module.scss";

class MobileMenu extends Component {
  constructor(props) {
    this.state = {
      showMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    const { links } = this.props;

    return (
      <>
        <button
          type="button"
          className={styles.mobileMenuToggle}
          onClick={this.toggleMenu}
        >
          Menu
        </button>
        {this.state.showMenu && (
          <ul className={style.mobileMenu}>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MobileMenu;
