import React, { useState, useEffect } from 'react';

const GetText = ({ filename }) => {
  const [textContent, setTextContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filename);
        if (response.ok) {
          const data = await response.text();
          setTextContent(data);
        } else {
          throw new Error('Error fetching text data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [filename]);

  return <pre className="text-field trispace-font">{textContent}</pre>;
};

export default GetText;
