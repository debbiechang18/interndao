import React from 'react'
import { useMediaQuery } from 'react-responsive'
import triangle from "../assets/triangle.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
// import textbox from '../assets/textbox.png'
import '../styles/Home.css'
import { Link } from "react-router-dom"
import VintageTextbox from "../components/VintageTextbox"
import yellowTrack from "../assets/Yellow track.svg"
import blueTrack from "../assets/Blue Track.svg"


function Home() {
    const isMobile = useMediaQuery({ maxWidth: 767 }); 

    return (
      <div className={`home-page-container ${!isMobile && 'home-bg'}`}>
        {isMobile && (
          <div className="trispace-font dao-handshake" id="dao-handshake-mobile">
            DAO's <span role="img" aria-label="coffee emoji" className="inline-emoji">&#x1F91D;</span> DAO's
          </div>
        )}
          {!isMobile && (
              <div id="blue-track">
                <img src = { blueTrack } className="blue-track" alt="blue track"/>
              <img src= { yellowTrack } className="yellow-track" alt="yellow track"/>
              <ul className="home-menu-desktop">
                <li className="home-menu-desktop-item trispace-font">
                <Link to="/interns">
                  <img src={triangle} alt="triangle" className="home-menu-triangle" />
                  <h5 className="home-menu-desktop-label">meet the interns</h5>
                </Link>
                </li>
                <li className="home-menu-desktop-item trispace-font">
                <Link to="/apply">
                <img src={triangle} alt="triangle" className="home-menu-triangle" />  <h5 className="home-menu-desktop-label">apply to be an intern</h5>
                </Link>
                </li>
                <li className="home-menu-desktop-item trispace-font">
                <Link to="/consulting">
                <img src={triangle} alt="triangle" className="home-menu-triangle" /> <h5 className="home-menu-desktop-label">learn about services</h5>
                </Link>
                </li>
              </ul>

              </div>
          )}
          {isMobile && (
          <>
            <ul className="home-menu trispace-font">
            <li>
              <Link className="home-link trispace-font" to="/interns">
                {isMobile ? (
                  <span role="img" aria-label="coffee emoji" className="emoji-bullet">&#x2615;</span>
                ) : (
                  <img src={triangle} className="home-triangle" alt="yellow triangle"/>
                )}
                meet the interns
                {isMobile && (<FontAwesomeIcon icon={faAngleRight} />)}
              </Link>
            </li>
            <li>
              <Link className="home-link trispace-font" to="/apply">
                {isMobile ? (
                  <span role="img" aria-label="rocket emoji" className="emoji-bullet">&#x1F680;</span>
                ) : (
                  <img src={triangle} className="home-triangle" alt="yellow triangle"/>
                )}
                apply to be an intern
                {isMobile && (<FontAwesomeIcon icon={faAngleRight} />)}
              </Link>
            </li>
            <li>
              <Link className="home-link trispace-font" to="/consulting">
                {isMobile ? (
                  <span role="img" aria-label="target emoji" className="emoji-bullet">&#x1F3AF;</span>
                ) : (
                  <img src={triangle} className="home-triangle" alt="yellow-triangle"/>
                )} learn about services
                {isMobile && (<FontAwesomeIcon icon={faAngleRight} />)}
              </Link>
            </li>
          </ul>
          </>

          )}
          
        <div className="philosophy-container">
          <VintageTextbox />
        </div>
        {isMobile && (
          <div className="contact-info-container contact-info-container-mobile">
                <Link className="contact-info-mobile trispace-font" to="mailto:internDAO@gmail.com">
                  <span role="img" aria-label="inbox tray" className="emoji-bullet">&#128229;</span>
                  <h3 className="contact-info-text trispace-font">internDAO@gmail.com</h3>
                </Link>
                <div className="contact-info-mobile">
                  <span role="img" aria-label="penguin emoji" className="emoji-bullet">&#128039;</span>
                  <h3 className="contact-info-text trispace-font">carrier-pigeon #4883</h3>
                </div>

          </div>
        )}
      </div>
    );
  }

  export default Home;
