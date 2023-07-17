import React from "react";
import "../styles/ProfilePage.css";
import { useMediaQuery } from "react-responsive";

const UserAwards = ({ awards }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 , maxWidth: 991 });

  if (!awards || awards.length === 0) {
    // Return null or any other component/message when there are no awards
    return null;
  }

  if (isMobile || isTablet) {
    // Render mobile version
    return (
      <>
        {awards.map((award, index) => (
          <div key={index} className="user-awards-wrapper">
            <span className="trophy-icon"></span>{" "}
            <h4 className="play-font award-label">
              {award.date} 
              <br />'{award.title}'
            </h4>
          </div>
        ))}
      </>
    );
  } else {
    // Render desktop version
    return (
      <>
        {awards.map((award, index) => (
          <div key={index} className="user-awards-wrapper">
            <span className="trophy-icon"></span>{" "}
            <h4 className="play-font award-label">
              {award.date} '{award.title}'
            </h4>
          </div>
        ))}
      </>
    );
  }
};

export default UserAwards;
