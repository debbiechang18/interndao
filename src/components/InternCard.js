import React from "react";
import "../styles/InternCard.css";
import { Link } from 'react-router-dom';

const InternCard = ({ name, photo, username, index, section }) => {
  const profilePhoto = `${photo}`;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
 
      <Link to={`/interns/${username}`} className="card-link">
      <div className="card-container" onClick={handleClick}>
        <div className={`panel_${index + 1} ${name} card-content`}>
          <img src={profilePhoto} alt={name} className="thumbnail-photo" />
          <h5 className="play-font username">{username}</h5>
        </div>
      </div>
      </Link>
    </>
  );
};

export default InternCard;
