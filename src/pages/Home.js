import React from "react";
import { useMediaQuery } from 'react-responsive'
import MobileHomePage from "./MobileHomePage";
import DesktopHomePage from "./DesktopHomePage";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); 

  if (isMobile) {
    return <MobileHomePage />
  }
  else {
    return <DesktopHomePage />
  }
}

export default Home