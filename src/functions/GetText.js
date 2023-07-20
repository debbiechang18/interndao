import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetText = ({ apiUrl }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const textData = response.data.data.attributes.text;
        setText(textData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return <pre className="text-field trispace-font">{text}</pre>;
};

export default GetText;
