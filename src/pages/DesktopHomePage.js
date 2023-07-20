import React from 'react'
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
                <h5 className="triangle-icon">&#9654;</h5>
                <h5 className="home-menu-desktop-label">meet the interns</h5>
            </Link>
            </li>
            <li className="home-menu-desktop-item trispace-font">
                <Link to="/apply">
                  <h5 className="triangle-icon">&#9654;</h5>
                    <h5 className="home-menu-desktop-label">apply to be an intern</h5>
                </Link>
                </li>
            <li className="home-menu-desktop-item trispace-font">
                <Link to="/consulting">
                    <h5 className="triangle-icon">&#9654;</h5>
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
