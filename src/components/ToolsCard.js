import React from "react";
import { Link } from "react-router-dom";
import "../styles/ToolsCard.css";
import linkIcon from "../assets/link-icon.png";
import "../assets/tools-thumbnail.png";
import { useMediaQuery } from "react-responsive";

const ToolsCard = ({ toolsData }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="tools-buttons-container">
      {toolsData.map((tool) => {
        const fullUrl = `www.${tool.attributes.label}.com`;
        return (
          <Link to={tool.attributes.url} key={tool.id}>
            <div className="tools-link-button">
              <img src={linkIcon} className="link-icon" alt="Link Icon" />
              <h5 className="tools-link-label play-font">
                {!isMobile ? fullUrl : tool.attributes.label}
              </h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ToolsCard;
