import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "../styles/Header.css";
import hamburgerIcon from "../assets/burger.png";
import GetLogo from "../functions/GetLogo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className="header-container">
      <Link className="logo-link" to="/">
        <GetLogo logoType="mobileLogo" alt="logo" />
      </Link>
      <span
        className={`hamburger-icon ${menuOpen ? "menu-open" : ""}`}
        onClick={toggleMenu}
      >
        <img
          className="hamburger-icon-img"
          src={hamburgerIcon}
          alt="hamburger icon"
        />
      </span>
      <HamburgerMenu isOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
    </div>
  );
};

export default Header;
