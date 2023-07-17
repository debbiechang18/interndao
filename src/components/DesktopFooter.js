import React from "react"
import logo from '../assets/logo-final.png'
import { Link } from 'react-router-dom'
import "../styles/Footer.css"


const DesktopFooter = () => {
    const path = window.location.pathname
    return (
        <div className="desktop-footer">
            <div className="footer-row footer-row-1">
                <div class="footer-col footer-col-1">
                    <img src={ logo } className="footer-logo-sm"/>
                    <p className="footer-text trispace-font">internDAO connects traders, exchanges, 
                    institutions, and DeFi platforms with democratized access to the 
                    best-in-class liquidity and trading execution at zero or or low cost.</p>

                </div>
                <div class="footer-col footer-col-2">
                    <Link to="/interns" className="footer-link">
                        <h5 className="play-font footer-heading"> meet the interns</h5>
                    </Link>
                    <ul className="footer-links">
                        <li className="trispace-font footer-link">
                            <Link to="/interns">
                            <h6 className="footer-link">not interns</h6>
                            </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/interns">
                            <h6 className="footer-link">dao heads</h6>
                            </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/interns">
                            <h6 className="footer-link">interns</h6>
                            </Link>
                        </li>
                    </ul> 
        
                </div>
                <div class="footer-col footer-col-3">
                    <Link to="/consulting">
                        <h5 className="play-font footer-heading"> consulting</h5>
                    </Link>
                    <ul className="footer-links">
                        <li className="trispace-font footer-link">
                            <Link to="/consulting">
                            <h6 className="footer-link"> clients</h6>
                            </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/consulting">
                            <h6 className="footer-link">public relations</h6>
                            </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/consulting">
                            <h6 className="footer-link">decentralized governance</h6>
                            </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/consulting">
                            <h6 className="footer-link">business intelligence</h6>
                            </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/consulting">
                            <h6 className="footer-link">protocol design</h6>
                            </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/consulting">
                            <h6 className="footer-link">treasury management</h6>
                            </Link>
                        </li>
                    </ul> 
                </div>
                <div class="footer-col footer-col-4">
                    <Link to="/tools">
                        <h5 className="play-font footer-heading">tools</h5>
                    </Link>
                    <ul className="footer-links">
                        <li className="trispace-font footer-link">
                            <Link to="/tools">
                            <h6 className="footer-link">clients</h6>
                            </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/tools">
                            <h6 className="footer-link">clients</h6>
                            </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/tools">
                            <h6 className="footer-link">clients</h6>
                            </Link>
                        </li>
                    </ul>

                </div>
                <div class="footer-col footer-col-5">
                    <Link to="/contact">
                        <h5 className="play-font footer-heading">contact</h5>
                    </Link>
                    <ul className="footer-links">
                        <li className="trispace-font footer-link">
                        <Link to="/interns">
                        <h6 className="footer-link">apply to be an intern</h6>
                        </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/consulting">
                            <h6 className="footer-link">consulting services</h6>
                            </Link>
                        </li>
                        <li className="trispace-font footer-link">
                            <Link to="/">
                            <h6 className="footer-link">gm</h6>
                            </Link>
                        </li>
                    </ul>
                    <div class="footer-icons-container">       
                        <a href= "https://instagram.com"><i class="fa-brands fa-twitter footer-icons" /></a>
                        <a href= "https://instagram.com"><i class="fa-brands fa-instagram footer-icons" /></a>
                        <a href= "https://instagram.com"><i class="fa-brands fa-linkedin footer-icons" /></a>
                        <a href= "https://instagram.com"><i class="fa-brands fa-discord footer-icons" /></a>
                        <a href= "https://instagram.com"><i class="fa-brands fa-telegram footer-icons" /></a>
                    </div>

                </div>
            </div>
            <div class="footer-row footer-row-2">
                <div class="footer-col footer-col-6">
                    <p className="trispace-font fine-print">Copyright C 2022 InternDao. All Rights Reserved.</p>
                </div>
                <div class="footer-col footer-col-7">
                    <ul class="fine-print-links">
                        <li className=" fine-print-link">
                        <Link to="/">
                        <p className="trispace-font fine-print"> Terms of Service </p>
                        </Link> 
                        </li>
                        <li className="fine-print-link">
                            <Link to="/">
                            <p className="trispace-font fine-print"> Privacy Policy </p>
                            </Link> 
                        </li>
                        <li className="fine-print-link">
                            <Link to="/">
                            <p className="trispace-font fine-print"> Information Security Statement </p>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );

    }

export default DesktopFooter;
