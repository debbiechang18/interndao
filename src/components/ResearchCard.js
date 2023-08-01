import React from "react";
import "../styles/ResearchCard.css";

const ResearchCard = ({ title, image, subtitle, url }) => {
  const coverImage = `${image}`;
  return (
    <div className="research-card-container">
      <div className="research-card animate-card">
        <img src={coverImage} alt={title} className="thumbnail-img" />
        <div className="card-text">
          <h5 className="card-title play-font">{title}</h5>
          <p className="card-subtitle trispace-font">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;

