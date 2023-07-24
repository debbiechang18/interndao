import React from "react";
import NavigationMenu from "../components/NavigationMenu";
import "../styles/HamburgerMenu.css";
import "../styles/NavigationMenu.css";

const HamburgerMenu = ({ isOpen, onCloseMenu }) => {
  const closeMenu = () => {
    onCloseMenu();
  };

  return (
    <>

      <div
        className={`dark-overlay ${isOpen ? "visible" : "hidden"}`}
        onClick={closeMenu}>
      </div>

      <div
        className={`hamburger-menu-container ${isOpen ? "open" : "closed"}`}
      >
        <div className="hamburger-menu-wrapper">
          <NavigationMenu onCloseMenu={onCloseMenu} />
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
