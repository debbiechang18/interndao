import React from "react";
import { Link } from "react-router-dom";
import blueTrack from "../assets/Blue Track.svg"
import yellowTrack from "../assets/Yellow track.svg"
import triangle from "../assets/triangle.png"
import "../styles/DesktopHomePage.css"
import VintageTextbox from "../components/VintageTextbox"



const DesktopHomePage = () => {
    return (
        <div className="desktop-home-page-container">
            <div id="track-container">
                <img src = { blueTrack } className="blue-track" alt="blue track"/>
                <img src= { yellowTrack } className="yellow-track" alt="yellow track"/>
                <ul className="home-menu-desktop">
                    <li className="home-menu-desktop-item">
                        <Link to="/interns">
                            <img src={triangle} alt="triangle" className="home-menu-triangle" />
                            <h5 className="home-menu-desktop-label trispace-font">meet the interns</h5>
                        </Link>
                    </li>
                        <li className="home-menu-desktop-item">
                            <Link to="/apply">
                                <img src={triangle} alt="triangle" className="home-menu-triangle" />  
                                <h5 className="home-menu-desktop-label trispace-font">apply to be an intern</h5>
                            </Link>
                        </li>
                    <li className="home-menu-desktop-item trispace-font">
                        <Link to="/consulting">
                            <img src={triangle} alt="triangle" className="home-menu-triangle" /> 
                            <h5 className="home-menu-desktop-label  trispace-font">learn about services</h5>
                        </Link>
                    </li>
              </ul>
            </div>
            <div className="philosophy-container">
                <VintageTextbox />
            </div>
        </div>
    )


}

export default DesktopHomePage