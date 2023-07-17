import React from "react";
import "../styles/ConsultingPage.css";

const ConsultingPage = ({ content }) => {
  return (
    <div className="consulting-page-container">
      <div className="consulting-page-wrapper">
        <div className="consulting-entry-wrapper">
      {content.map((item, index) => (
        <div className="consulting-page-entry" key={index}>
          <h4 className="play-font consulting-page-header">{item.title}</h4>
          <p className="trispace-font consulting-page-text">{item.text}</p>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default ConsultingPage;
