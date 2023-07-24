import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "../styles/Header.css";
import hamburgerIcon from "../assets/burger.png";
import axios from "axios";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoData, setLogoData] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    // Fetch logo data using Axios
    axios.get("https://strapi-production-5302.up.railway.app/api/logo?populate=*")
      .then(response => {
        // Handle the response data
        setLogoData(response.data.data.attributes.fullLogo.data.attributes.url);
      })
      .catch(error => {
        console.error("Error fetching logo data:", error);
      });
  }, []);

  return (
    <div className="header-container">
      <img src={ logoData } className="mobile-logo" alt="logo" />
      <span
        className={`hamburger-icon ${menuOpen ? "menu-open" : ""}`}
        onClick={toggleMenu}
      >
        <img className="hamburger-icon-img" src={hamburgerIcon} alt="hamburger icon" />
      </span>
      <HamburgerMenu isOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
    </div>
  );
};

export default Header;
