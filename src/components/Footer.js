import React from "react"
import { useMediaQuery } from 'react-responsive'
import MobileFooter from "./MobileFooter"
import TabletFooter from "./TabletFooter"


const Footer = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 }); // Define your mobile breakpoint here

    return (
        <div className="footer-container">
            {isMobile ? <MobileFooter /> : <TabletFooter />}
        </div>
    );

    }

export default Footer;