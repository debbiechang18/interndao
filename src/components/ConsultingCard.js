import React from 'react';
import "../styles/AccordionCard.css"

const ConsultingCard = ({ clientName, thumbnail, index }) => {
  return (
    <div className="card-container">
    <div className={`panel_${index + 1} card-content`}>
      <img src={thumbnail} alt={clientName} className="thumbnail-photo" />
      <h6 className="play-font username">{clientName}</h6>
    </div>
  </div>
  );
};

export default ConsultingCard;
