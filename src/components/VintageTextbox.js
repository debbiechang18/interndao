import React, { useEffect } from "react";
import GetText from "../components/GetText"
import "../styles/VintageTextbox.css"


const VintageTextbox = () => {
    const okEmoji = "ok-button.png"

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);


    return (


        <div className="philosophy-element">

            <div className="vintage-textbox">
                <div class="philosophy-title">
                
                <p className="philosophy-title play-font">philosophy</p>
                <button>X</button>
                </div>
                <div className="textbox-body">
                <GetText filename="philosophy.txt" />
                </div>
                <button className="ok-button"><img className="ok-emoji" src={ okEmoji } /></button>
            </div>

        </div>

    );
}

export default VintageTextbox;