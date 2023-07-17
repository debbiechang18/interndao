import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/BackButton.css';

const BackButton = ({ section, activePanel }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    //navigate to the /interns route with the active panel as state.
      navigate('/interns', { state: { activePanel } });
    };
    

  return (
    <div className="back-button-container">
      <button className="play-font back-button" onClick={handleClick}>
        &lt; {section}
      </button>
    </div>
  );
};

export default BackButton;
