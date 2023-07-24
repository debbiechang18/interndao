import React from "react";
import { Link } from "react-router-dom"
import "../styles/MobileHomeMenu.css"

const MobileHomeMenu = () => {

 return (
    <>
        <ul className="mobile-home-menu">
            <li className="mobile-home-menu-item">
                <Link className="mobile-home-link" to="/interns">
                    <span role="img" aria-label="coffee emoji" className="emoji-bullet">&#x2615;</span>
                    <h4 className="trispace-font">meet the interns</h4>
                    <i className="fas">&#xf054;</i>

                </Link>
            </li>
            <li className="mobile-home-menu-item">
                <Link className="mobile-home-link" to="/apply">
                    <span role="img" aria-label="rocket emoji" className="emoji-bullet">&#x1F680;</span>
                    <h4 className="trispace-font">apply to be an intern</h4>
                    <i className="fas">&#xf054;</i>
                </Link>
            </li>
            <li className="mobile-home-menu-item">
                <Link className="mobile-home-link" to="/consulting">
                    <span role="img" aria-label="target emoji" className="emoji-bullet">&#x1F3AF;</span>
                    <h4 className="trispace-font">learn about services</h4>
                    <i className="fas">&#xf054;</i>
                </Link>
            </li>
        </ul>
</>

 )   
}

export default MobileHomeMenu