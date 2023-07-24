import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import '../styles/MobileHomePage.css'
import { Link } from "react-router-dom"
import VintageTextbox from "../components/VintageTextbox"
import MobileHomeMenu from '../components/MobileHomeMenu'


const MobileHomePage = () => {
    return (
      <div className="mobile-home-page-container">
          <div className="dao-handshake" id="dao-handshake-mobile">
            <h6 className="trispace-font">DAO's</h6>
            <span role="img" aria-label="coffee emoji" className="inline-emoji">&#x1F91D;</span> 
            <h6 className="trispace-font">DAO's</h6>
          </div>
       <div className="home-menu-container">
        <MobileHomeMenu />
       </div>
        <div className="philosophy-container">
          <VintageTextbox />
        </div>

        <div className="contact-info-container contact-info-container-mobile">
            <Link className="contact-info-mobile trispace-font" to="mailto:internDAO@gmail.com">
                {/* <span role="img" aria-label="inbox tray" className="emoji-bullet">&#128229;</span> */}
                <h3 className="contact-info-text trispace-font">internDAO@gmail.com</h3>
            </Link>
            <div className="contact-info-mobile">
                {/* <span role="img" aria-label="penguin emoji" className="emoji-bullet">&#128039;</span> */}
                <h3 className="contact-info-text trispace-font">carrier-pigeon #4883</h3>
            </div>
        </div>
      </div>
    );
  }

  export default MobileHomePage;
