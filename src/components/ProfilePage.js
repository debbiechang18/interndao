import React from "react";
import { useMediaQuery } from 'react-responsive';
import MobileProfilePage from "./MobileProfilePage";
import DesktopProfilePage from "./DesktopProfilePage";

const ProfilePage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define your mobile breakpoint here

  return (
    <div className="profile-page-container">
      {isMobile ? <MobileProfilePage /> : <DesktopProfilePage />}
    </div>
  );
};

export default ProfilePage;
