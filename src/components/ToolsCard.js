import React from "react";
import "../styles/ToolsCard.css";
import link from "../assets/link-icon.png"
import { useMediaQuery } from "react-responsive";

const ToolsCard = ({ toolsData }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); 

  return (
    <div className="tools-card-container">
        {toolsData.map((item, index) => (
              <button className="button tools-link-button icon-button-md play-font" 
                id={`tools-button-${index}`}
                onclick={item.url}>
                <img src={ link } className="link-icon button-link-icon" alt="link-icon"/>
                {`${isMobile ? item.name : item.text}`}
              </button>
        ))}

    </div>
  );
};

export default ToolsCard;
