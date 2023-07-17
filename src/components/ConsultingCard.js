import React from "react";
import "../styles/ConsultingCard.css";

const ConsultingCard = ({ name, photo }) => {
  const profilePhoto = `${ photo }`
  return (
    <div className="consulting-card-container">
        <div className={`consulting-card-content ${name} `}>
          <img src={ profilePhoto }
            alt={name} className="consulting-thumbnail-photo" />
          <h5 className="play-font client-name">{name}</h5>
        </div>
    </div>

  );
};

export default ConsultingCard;
