import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavigationMenu.css'

const NavigationMenu = ({ onCloseMenu }) => {
  const isMobile = ({maxWidth: 768});

  return (
    <ul className={`navigation-links play-font ${isMobile && 'mobile-navigation-links'}`}>
      <CustomLink to="/" onCloseMenu={onCloseMenu}>00 home</CustomLink>
      <CustomLink to="/interns" onCloseMenu={onCloseMenu}>01 interns</CustomLink>
      <CustomLink to="/consulting" onCloseMenu={onCloseMenu}>02 consulting</CustomLink>
      <CustomLink to="/contact" onCloseMenu={onCloseMenu}>03 contact</CustomLink>
      <CustomLink to="/research" onCloseMenu={onCloseMenu}>04 research</CustomLink>
      <CustomLink to="/tools" onCloseMenu={onCloseMenu}>05 tools</CustomLink>
    </ul>
  );
};

function CustomLink({ to, children, onCloseMenu, ...props }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (location.pathname.startsWith(to + '/') && to !== '/');

  const handleClick = () => {
    if (isMobile && onCloseMenu) {
      onCloseMenu(); // Close the menu when a link is clicked on mobile
    }
  };

  return (
    <li className={`nav-item ${isActive ? 'active' : 'inactive'}`}>
      <Link className="nav-link" to={to} {...props} onClick={handleClick}>
        <h5 className="triangle-icon-nav">&#9654;</h5>
        <h5 className="link-label">{children}</h5>
      </Link>
    </li>
  );
}

export default NavigationMenu;
