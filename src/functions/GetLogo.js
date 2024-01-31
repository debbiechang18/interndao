import React, { useState, useEffect } from "react";
import axios from "axios";

function GetLogo({ logoType }) {
  const defaultLogo = "logo-icon-yellow.svg";
  const defaultLogoText = "logo-text.svg";
  const defaultLogoMobile = "logo-mobile.svg";
  const defaultLogoFooter = "logo-icon-pink.svg";

  // Determine the default logo based on the logoType
  const defaultLogoData =
    logoType === "desktopLogo"
      ? defaultLogo
      : logoType === "desktopLogoText"
      ? defaultLogoText
      : logoType === "mobileLogo"
      ? defaultLogoMobile
      : logoType === "footerLogo"
      ? defaultLogoFooter
      : null;

  const [logoData, setLogoData] = useState(defaultLogoData);

  useEffect(() => {
    axios
      .get("https://strapi-production-5302.up.railway.app/api/logo?populate=*")
      .then((response) => {
        if (response.data.data.attributes[logoType]) {
          const imageUrl =
            response.data.data.attributes[logoType].data.attributes.url;
          setLogoData(`${imageUrl}?cache=${Math.random()}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching logo data:", error);
        // In case of error, logoData remains the default
      });
  }, [logoType]);

  return <img src={logoData} alt="Logo" className={logoType} loading="lazy" />;
}

export default GetLogo;
