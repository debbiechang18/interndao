import React, { useState, useEffect } from 'react'
import axios from 'axios'

function GetLogo({ logoType }) {
  const [logoData, setLogoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    axios
      .get("https://strapi-production-5302.up.railway.app/api/logo?populate=*")
      .then((response) => {
        if (response.data.data.attributes[logoType]) {
          setLogoData(response.data.data.attributes[logoType].data.attributes.url);
        } else {
          console.error("Invalid logoType:", logoType);
          // Handle the error, set a default logo, or show an error message
        }
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching logo data:", error);
        setIsLoading(false); // Set loading to false even if there's an error
      });
  }, [logoType]);

  if (isLoading) {
    // Show a loading indicator or default logo while waiting for data
    return <div>Loading logo...</div>;
  }

  return <img src={logoData} alt="Logo" className={logoType} />;
}

export default GetLogo