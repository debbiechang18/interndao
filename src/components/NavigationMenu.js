import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import triangle from '../assets/triangle.png';

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <ul className="navigation-links link-text play-font">
        <CustomLink to="/">00 home</CustomLink>
        <CustomLink to="/interns">01 interns</CustomLink>
        <CustomLink to="/consulting">02 consulting</CustomLink>
        <CustomLink to="/contact">03 contact</CustomLink>
        <CustomLink to="/research">04 research</CustomLink>
        <CustomLink to="/tools">05 tools</CustomLink>
      </ul>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (location.pathname.startsWith(to + '/') && to !== '/');

  return isMobile ? ( 
    <li className={`nav-links ${isActive ? 'active' : 'inactive'}`}>
      <img src={triangle} alt="triangle" id="nav-triangle" />
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  ) : (
    <li className={`nav-links ${isActive ? 'active' : 'inactive'}`}>
      <img src={triangle} alt="triangle" id="nav-triangle" />
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavigationMenu