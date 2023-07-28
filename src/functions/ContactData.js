import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import axios from 'axios';

const ContactData = () => {
  const [contactButtons, setContactButtons] = useState([]);

  const fetchContactButtonsData = async () => {
    // ... Your API call to fetch contact buttons data ...
  };

  useEffect(() => {
    fetchContactButtonsData();
  }, []);

  return (
    <>
      {contactButtons.map((item) => (
        <Buttons buttonID={item.buttonID} key={item.id} />
      ))}
    </>
  );
};

export default ContactData;