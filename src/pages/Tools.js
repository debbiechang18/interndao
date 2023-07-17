import React from "react"
import ToolsCard from '../components/ToolsCard'
import '../styles/Tools.css'
import toolsData from "../data/tools.json"


const Tools = () => {
  return (
    <div className="tools-window">
        <ToolsCard toolsData={toolsData}/>
    </div>  
  );

  };
  

export default Tools;