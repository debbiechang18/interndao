import React from "react"
import { useMediaQuery } from 'react-responsive'
import MobileFooter from "./MobileFooter"
import DesktopFooter from "./DesktopFooter"


const Footer = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 }); // Define your mobile breakpoint here

    return (
        <div className="footer-container">
            {isMobile ? <MobileFooter /> : <DesktopFooter />}
        </div>
    );

    }

export default Footer;