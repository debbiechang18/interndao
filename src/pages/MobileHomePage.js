import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import VintageTextbox from "../components/VintageTextbox";
import MobileHomeMenu from '../components/MobileHomeMenu';
import axios from 'axios';
import '../styles/MobileHomePage.css';

const MobileHomePage = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const apiUrl = "https://strapi-production-5302.up.railway.app/api/contact-info";

    axios
      .get(apiUrl) 
      .then((response) => {
        setContactInfo(response.data.data.attributes);
      })
      .catch((error) => {
        console.error("Error fetching contact data", error);
      });
  }, []);

  return (
    <div className="mobile-home-page-container">
      <div className="dao-handshake" id="dao-handshake-mobile">
        <h3 className="trispace-font">DAO's</h3>
        <span role="img" aria-label="coffee emoji" className="inline-emoji">&#x1F91D;</span> 
        <h3 className="trispace-font">DAO's</h3>
      </div>
      <div className="home-menu-container">
        <MobileHomeMenu />
      </div>
      <div className="philosophy-container">
        <VintageTextbox />
      </div>

      {/* Conditionally render contact info when contactInfo is not null */}
      {contactInfo && (
        <div className="contact-info-container contact-info-container-mobile">
          <Link className="contact-info-mobile trispace-font" to={`mailto:${contactInfo.email}`}>
            <span role="img" aria-label="inbox tray" className="emoji-bullet">&#128229;</span>
            <h5 className="contact-info-text trispace-font">{contactInfo.email}</h5>
          </Link>
          <div className="contact-info-mobile">
            <span role="img" aria-label="penguin emoji" className="emoji-bullet">&#128039;</span>
            <h5 className="contact-info-text trispace-font">{contactInfo.contact2}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHomePage;
