import React, { useEffect, useState } from "react";
import "../styles/VintageTextbox.css";
import okEmoji from "../assets/ok-button.png";
import axios from "axios";

const VintageTextbox = () => {
  const [philosophyText, setPhilosophyText] = useState("");

  useEffect(() => {
    const apiUrl = "https://strapi-production-5302.up.railway.app/api/philosophy-text";

    axios
      .get(apiUrl)
      .then((response) => {
        // handle API response data
        const philosophyTextData = response.data.data.attributes.text;
        setPhilosophyText(philosophyTextData);
      })
      .catch((error) => {
        console.error("Error fetching philosophy text:", error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the item
  }, []);

  return (
    <div className="philosophy-element">
      <div className="vintage-textbox">
        <div className="philosophy-title">
          <p className="philosophy-title play-font">philosophy</p>
          <button>X</button>
        </div>
        <div className="textbox-body">{philosophyText}</div>
        <button className="ok-button">
          <img className="ok-emoji" src={okEmoji} alt="ok emoji" />
        </button>
      </div>
    </div>
  );
};

export default VintageTextbox;
