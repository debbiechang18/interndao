import React, { useEffect } from "react";
import GetText from "../functions/GetText"
import "../styles/VintageTextbox.css"
import okEmoji from "../assets/ok-button.png"

const VintageTextbox = () => {

    const apiUrl="http://localhost:1337/api/philosophy-text"

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
                <div className="textbox-body">
                <GetText apiUrl={apiUrl} />
                </div>
                <button className="ok-button"><img className="ok-emoji" src={ okEmoji } alt="ok emoji" /></button>
            </div>
        </div>

    );
}

export default VintageTextbox;