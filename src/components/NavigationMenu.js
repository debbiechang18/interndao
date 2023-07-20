import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavigationMenu.css'

const NavigationMenu = () => {
  return (
      <ul className="navigation-links link-text play-font">
        <CustomLink to="/">00 home</CustomLink>
        <CustomLink to="/interns">01 interns</CustomLink>
        <CustomLink to="/consulting">02 consulting</CustomLink>
        <CustomLink to="/contact">03 contact</CustomLink>
        <CustomLink to="/research">04 research</CustomLink>
        <CustomLink to="/tools">05 tools</CustomLink>
      </ul>
  );
};

function CustomLink({ to, children, ...props }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (location.pathname.startsWith(to + '/') && to !== '/');

  return isMobile ? ( 
    <li className={`nav-item ${isActive ? 'active' : 'inactive'}`}>
      <Link className="nav-link" to={to} {...props}>
      <h5 className="triangle-icon-nav">&#9654;</h5>
      <h5 className="link-label">{children}</h5>
      </Link>
    </li>
  ) : (
    <li className={`nav-item ${isActive ? 'active' : 'inactive'}`}>
      <Link className="nav-link" to={to} {...props}>
        <h5 className="triangle-icon-nav">&#9654;</h5>
        <h5 className="link-label">{children}</h5>
      </Link>
    </li>
  );
}

export default NavigationMenu