import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import triangle from '../assets/triangle.png';
import pinkTrack from '../assets/pink divider.svg';
import logo from '../assets/logo-final.png';
import '../styles/Nav.css';

function Nav() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  return (
    <div className={`nav-container nav-container${isHomePage ? '-home' : ''} aspect-ratio-container${isHomePage ? '-home' : ''}`}>
      <div className="desktop-logo">
        <Link to="/">
          <img src={logo} alt="logo" id="desktop-logo" />
        </Link>
      </div>
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
      {isHomePage && (
        <div className="pink-track">
          <img src={pinkTrack} alt="pink divider line" id="pink-track" />
        </div>
      )}
      {isHomePage && (
        <div className="contact-info-container">
          <Link className="contact-info trispace-font contact-info-desktop" to="mailto:internDAO@gmail.com">
            <span role="img" aria-label="inbox tray" className="emoji-bullet">&#128229;</span>
            <h3 className="contact-info-text trispace-font">internDAO@gmail.com</h3>
          </Link>
          <div className="contact-info contact-info-desktop">
            <span role="img" aria-label="penguin emoji" className="emoji-bullet">&#128039;</span>
            <h3 className="contact-info-text trispace-font">carrier-pigeon #4883</h3>
          </div>
        </div>
      )}
      <div className="blank"></div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const location = useLocation();
  const isActive =
  (location.pathname === to) ||                                  
  (location.pathname.startsWith(to + '/') && to !== '/'); 

  return (
    <li className={`nav-links ${isActive ? 'active' : 'inactive'}`}>
      <img src={triangle} alt="triangle" id="nav-triangle" />
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Nav;
