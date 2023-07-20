import React from 'react'
import triangle from "../assets/triangle.png"
import '../styles/DesktopHomePage.css'
import { Link } from "react-router-dom"
import VintageTextbox from "../components/VintageTextbox"
import yellowTrack from "../assets/Yellow track.svg"
import blueTrack from "../assets/Blue Track.svg"


const DesktopHomePage = () => {
    return (
      <div className="desktop-home-page-container">
        <div className="track-container">
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
                    <img src={triangle} alt="triangle" className="home-menu-triangle" />  
                    <h5 className="home-menu-desktop-label">apply to be an intern</h5>
                </Link>
                </li>
            <li className="home-menu-desktop-item trispace-font">
                <Link to="/consulting">
                    <img src={triangle} alt="triangle" className="home-menu-triangle" /> 
                    <h5 className="home-menu-desktop-label">learn about services</h5>
                </Link>
            </li>
        </ul>
        </div>
          
        <div className="philosophy-container">
          <VintageTextbox />
        </div>
       
      </div>
    );
  }

  export default DesktopHomePage;
