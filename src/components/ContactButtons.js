import React from 'react';
import useContactData from '../functions/ContactData';
import "../styles/ContactButtons.css"

const ContactButtons = ({ section }) => {
  // Call the useContactData hook to fetch the button data
  const { buttons, loading } = useContactData();

  if (loading) {
    return <div>Loading...</div>;
  }

  // Find the button data for the current section
  const buttonData = buttons.find((button) => button.attributes.section === section);

  if (!buttonData) {
    return null; // If no button data found for the section, return null to skip rendering
  }

  // Extract the buttonID from the button data
  const { buttonID } = buttonData.attributes;

  return (
    <div className="button-container">
      {section === 'apply to be an intern' && buttonID === 'apply-button' && (
        <button key={buttonData.id} className={`contact-page-button ${buttonID}`}>
          <span className="icon left-icon"></span> 
          <h6 className="button-label play-font">apply now</h6>
          <span className="icon right-icon"></span>
        </button>
      )}
      {section === 'consulting services' && buttonID === 'consulting-services-button' && (
        <button key={buttonData.id} className={`contact-page-button ${buttonID}`}>
          <h6 className="button-label play-font">world</h6>
          <span className="icon center-icon"></span>
          <h6 className="button-label play-font">interns</h6>
        </button>
      )}
      {section === 'general contact' && buttonID === 'contact-button' && (
        <button key={buttonData.id} className={`contact-page-button ${buttonID}`}>
          <span className="icon wave-icon"></span>
        </button>
      )}
    </div>
  );
};

export default ContactButtons;
