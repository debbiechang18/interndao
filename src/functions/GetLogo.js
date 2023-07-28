import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetLogo({ logoType}) {
  const [logoData, setLogoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://strapi-production-5302.up.railway.app/api/logo?populate=*')
      .then((response) => {
        if (response.data.data.attributes[logoType]) {
          const imageUrl = response.data.data.attributes[logoType].data.attributes.url;
          // Add a cache-busting query parameter using a random number
          const cacheBustingUrl = `${imageUrl}?cache=${Math.random()}`;
          setLogoData(cacheBustingUrl);
        } else {
          console.error('Invalid logoType:', logoType);
          // Handle the error, set a default logo, or show an error message
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching logo data:', error);
        setIsLoading(false);
      });
  }, [logoType]);

  if (isLoading) {
    // Show a loading indicator or default logo while waiting for data
    return <></>;
  }

  return <img src={logoData} alt="Logo" className={logoType} loading="lazy" />;
}

export default GetLogo;
