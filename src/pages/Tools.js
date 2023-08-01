import React, { useState, useEffect } from "react";
import ToolsCard from "../components/ToolsCard";
import "../styles/ToolsCard.css";
import axios from "axios";

const Tools = () => {
  const [toolsData, setToolsData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://strapi-production-5302.up.railway.app/api/tool-links";

    axios
      .get(apiUrl)
      .then((response) => {
        // handle API response data
        const toolsData = response.data.data;
        setToolsData(toolsData);
      })
      .catch((error) => {
        console.error("Error fetching tools data", error);
      });
  }, []);

  return (
    <div className="tools-window">
      <div className="tools-card-container">
        <ToolsCard toolsData={toolsData} />
      </div>
    </div>
  );
};

export default Tools;
