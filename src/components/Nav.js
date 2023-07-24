import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import pinkTrack from '../assets/pink divider.svg';
import '../styles/Nav.css';
import NavigationMenu from '../components/NavigationMenu'
import GetLogo from "../functions/GetLogo"

function Nav() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  return (
    <div className="nav-container">
        <Link className={`desktop-logo ${isHomePage ? 'visible' : 'hidden'}`} to="/">
          <GetLogo logoType="desktopLogo" />
          <GetLogo logoType="desktopLogoText" />
        </Link>
        <div className="navigation-menu">
        <NavigationMenu />
        </div>
        <div className={`pink-track ${!isHomePage ? 'hidden' : ''}`}>
          <img src={pinkTrack} alt="pink divider line" id="pink-track" />
        </div>
        <div className={`contact-info-container ${!isHomePage ? 'hidden' : ''}`}>
          <Link className="contact-info trispace-font contact-info-desktop" to="mailto:internDAO@gmail.com">
            <span role="img" aria-label="inbox tray" className="emoji-bullet">&#128229;</span>
            <h5 className="contact-info-text trispace-font">internDAO@gmail.com</h5>
          </Link>
          <div className="contact-info contact-info-desktop">
            <span role="img" aria-label="penguin emoji" className="emoji-bullet">&#128039;</span>
            <h5 className="contact-info-text trispace-font">carrier-pigeon #4883</h5>
          </div>
        </div>

      <div className="blank"></div>
    </div>
  );
}

export default Nav
