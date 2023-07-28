import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import "../styles/MobileFooter.css"
import GetLogo from "../functions/GetLogo"
import axios from "axios"


const MobileFooter = () => {
    const [footerText, setFooterText] = useState("");

    useEffect(() => {
      const apiUrl = "https://strapi-production-5302.up.railway.app/api/footer-text";
  
      axios
        .get(apiUrl)
        .then((response) => {
          // handle API response data
          const footerTextData = response.data.data.attributes.text;
          setFooterText(footerTextData);
        })
        .catch((error) => {
          console.error("Error fetching footer text:", error);
          const tempFooterTextData = "internDAO connects traders, exchanges, institutions, and DeFi platforms with democratized access to the best-in-class liquidity and trading execution at zero or or low cost."
          setFooterText(tempFooterTextData)
        });
    }, []);

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
            <div class="mobile-footer-icons-container">       
                <a href="https://twitter.com"><i class="fab fa-twitter footer-icons-mobile"></i></a>
                <a href= "https://instagram.com"><i class="fab fa-instagram footer-icons-mobile" /></a>
                <a href= "https://instagram.com"><i class="fab fa-linkedin footer-icons-mobile" /></a>
                <a href= "https://instagram.com"><i class="fab fa-discord footer-icons-mobile" /></a>
                <a href= "https://instagram.com"><i class="fab fa-telegram footer-icons-mobile" /></a>
            </div>
            <div className="logo-mission-container-mobile">            
                <GetLogo logoType="footerLogo" />
                <p className="footer-text-mobile trispace-font"> { footerText } </p>
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
                <h5 className="trispace-font copyright-text">Copyright &copy; 2022 InternDao. <br/>All Rights Reserved.</h5>
            </div>


        </div>
    );

    }

export default MobileFooter;