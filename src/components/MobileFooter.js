import React from "react"
import logo from '../assets/logo-final.png'
import { Link } from 'react-router-dom'
import "../styles/Footer.css"


const MobileFooter = () => {
    const path = window.location.pathname



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
                <a href= "https://instagram.com"><i class="fa-brands fa-twitter footer-icons-mobile" /></a>
                <a href= "https://instagram.com"><i class="fa-brands fa-instagram footer-icons-mobile" /></a>
                <a href= "https://instagram.com"><i class="fa-brands fa-linkedin footer-icons-mobile" /></a>
                <a href= "https://instagram.com"><i class="fa-brands fa-discord footer-icons-mobile" /></a>
                <a href= "https://instagram.com"><i class="fa-brands fa-telegram footer-icons-mobile" /></a>
            </div>
            <div className="logo-mission-container-mobile">            
                <img src={ logo } className="footer-logo-mobile"/>
                <p className="footer-text-mobile trispace-font">internDAO connects traders, exchanges, 
                institutions, and DeFi platforms with democratized access to the 
                best-in-class liquidity and trading execution at zero or or low cost.</p>
            </div>
            <div className="legal-links-mobile">
                <Link to="/">
                <p className="trispace-font mobile-link-sm"> Terms of Service </p>
                </Link> 
                <Link to="/">
                <p className="trispace-font mobile-link-sm"> Privacy Policy </p>
                </Link>
                <Link to="/">
                <p className="trispace-font mobile-link-sm"> Information Security Statement </p>
                </Link>
            </div>
            <div className="copyright-mobile">
                <p className="trispace-font">Copyright C 2022 InternDao. <br/>All Rights Reserved.</p>
            </div>


        </div>
    );

    }

export default MobileFooter;