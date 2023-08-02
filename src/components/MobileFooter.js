import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/MobileFooter.css";
import GetLogo from "../functions/GetLogo";
import getUrlFormat from "../functions/GetUrl";
import axios from "axios";

const MobileFooter = () => {
  const [footerText, setFooterText] = useState("");
  const [contactInfo, setContactInfo] = useState(null);
  const [twitterUrl, setTwitterUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [discordUrl, setDiscordUrl] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [telegramUrl, setTelegramUrl] = useState("");

  useEffect(() => {
    const footerTextApiUrl = "https://strapi-production-5302.up.railway.app/api/footer-text";
    const contactApiUrl = "https://strapi-production-5302.up.railway.app/api/contact-info";

    axios
      .get(footerTextApiUrl)
      .then((response) => {
        // handle API response data
        const footerTextData = response.data.data.attributes.text;
        setFooterText(footerTextData);
      })
      .catch((error) => {
        console.error("Error fetching footer text:", error);
        const tempFooterTextData =
          "internDAO connects traders, exchanges, institutions, and DeFi platforms with democratized access to the best-in-class liquidity and trading execution at zero or or low cost.";
        setFooterText(tempFooterTextData);
      });

    axios
      .get(contactApiUrl)
      .then((response) => {
        const contactInfo = response.data.data.attributes;
        setContactInfo(contactInfo);

        setTwitterUrl(getUrlFormat(contactInfo.twitter, "twitter.com"));
        setInstagramUrl(getUrlFormat(contactInfo.instagram, "instagram.com"));
        setDiscordUrl(getUrlFormat(contactInfo.discord, "discord.com/invite"));
        setLinkedInUrl(getUrlFormat(contactInfo.linkedin, "linkedin.com/in"));
        setTelegramUrl(getUrlFormat(contactInfo.telegram, "t.me"));
      })
      .catch((error) => {
        console.error("Error fetching contact info:", error);
      });
  }, []);

  // Add conditional rendering to wait until contactInfo is available
  if (!contactInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mobile-footer">
      <div className="mobile-footer-links">
        <Link to="/interns" className="footer-link">
          <h5 className="play-font mobile-footer-heading"> meet the interns</h5>
        </Link>
        <Link to="/consulting" className="footer-link">
          <h5 className="play-font mobile-footer-heading"> consulting</h5>
        </Link>
        <Link to="/tools" className="footer-link">
          <h5 className="play-font mobile-footer-heading"> tools </h5>
        </Link>
        <Link to="/contact" className="footer-link">
          <h5 className="play-font mobile-footer-heading"> contact </h5>
        </Link>
      </div>
      <div className="mobile-footer-icons-container">
        <a href={twitterUrl}>
          <i className="fab fa-twitter footer-icons-mobile"></i>
        </a>
        <a href={instagramUrl}>
          <i className="fab fa-instagram footer-icons-mobile"></i>
        </a>
        <a href={linkedInUrl}>
          <i className="fab fa-linkedin footer-icons-mobile"></i>
        </a>
        <a href={discordUrl}>
          <i className="fab fa-discord footer-icons-mobile"></i>
        </a>
        <a href={telegramUrl}>
          <i className="fab fa-telegram footer-icons-mobile"></i>
        </a>
      </div>
      <div className="logo-mission-container-mobile">
        <GetLogo logoType="footerLogo" />
        <p className="footer-text-mobile trispace-font"> {footerText} </p>
      </div>
      <div className="legal-links-mobile">
        <Link to="/terms-of-service">
          <h5 className="trispace-font mobile-link-sm"> Terms of Service </h5>
        </Link>
        <Link to="/privacy-policy">
          <h5 className="trispace-font mobile-link-sm"> Privacy Policy </h5>
        </Link>
        <Link to="/information-security-statement">
          <h5 className="trispace-font mobile-link-sm"> Information Security Statement </h5>
        </Link>
      </div>
      <div className="copyright-mobile">
        <h5 className="trispace-font copyright-text">Copyright &copy; 2022 InternDao. <br />All Rights Reserved.</h5>
      </div>
    </div>
  );
};

export default MobileFooter;
