import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-final.png';
import '../styles/MobileHeader.css';
import triangle from '../assets/triangle.png';

function MobileHeader({ menuOpen, toggleMenu }) {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef(null);

  const handleLinkClick = () => {
    if (menuOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      window.scrollTo(0, scrollPosition);
    }
  }, [menuOpen, scrollPosition]);

  return (
    <div className={`header-container ${menuOpen ? 'menu-open' : ''}`} ref={headerRef}>
      <div className="interndao-logo-container">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="logo" id="interndao-logo-img" />
        </Link>
      </div>

      <div className="hamburger-menu">
        <input
          className="checkbox"
          type="checkbox"
          name=""
          id="hamburger-checkbox"
          checked={menuOpen}
          onChange={toggleMenu}
        />

        <label htmlFor="hamburger-checkbox" className="hamburger-icon"></label>
      </div>

      <div className="popup-menu">
        <div className={`hamburger-menu-items ${menuOpen ? 'slide-up' : 'hidden'}`}>
          <div className="navigation-menu">
            <ul className="navigation-links link-text play-font">
              <CustomLink to="/" isActive={location.pathname === '/'} toggleMenu={toggleMenu}>
                00 home
              </CustomLink>
              <CustomLink
                to="/interns"
                isActive={location.pathname === '/interns'}
                toggleMenu={toggleMenu}
              >
                01 interns
              </CustomLink>
              <CustomLink
                to="/consulting"
                isActive={location.pathname === '/consulting'}
                toggleMenu={toggleMenu}
              >
                02 consulting
              </CustomLink>
              <CustomLink
                to="/contact"
                isActive={location.pathname === '/contact'}
                toggleMenu={toggleMenu}
              >
                03 contact
              </CustomLink>
              <CustomLink
                to="/research"
                isActive={location.pathname === '/research'}
                toggleMenu={toggleMenu}
              >
                04 research
              </CustomLink>
              <CustomLink
                to="/tools"
                isActive={location.pathname === '/tools'}
                toggleMenu={toggleMenu}
              >
                05 tools
              </CustomLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomLink({ to, isActive, children, toggleMenu, ...props }) {
  const handleClick = () => {
    if (typeof toggleMenu === 'function') {
      toggleMenu();
    }
  };

  return (
    <li className={`hamburger-nav-links nav-links ${isActive ? 'active' : 'inactive'}`}>
      <img src={triangle} alt="triangle" id="nav-triangle" />
      <Link to={to} onClick={handleClick} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default MobileHeader;
