import React from "react";
import "../styles/Buttons.css";


const Buttons = ({buttonID}) => {
  let content;

  if (buttonID === 'button1') {
    content = <button class="button icon-button-lg icon-text-icon play-font" id={ buttonID }>
                <span class="icon left-icon"></span> apply now <span class="icon right-icon"></span>
              </button>
  } else if (buttonID === 'button2') {
    content = <button class="button icon-button-lg text-icon-text play-font" id={ buttonID }>
                world<span class="icon center-icon"></span>interns
              </button>
  } else if (buttonID === 'button3') {
    content = <button class="button icon-button-lg icon-only play-font" id={ buttonID }>
                <span class="icon wave-icon"></span>
            </button>
  } else {
    content = <div>Default HTML</div>;
  }

  return (
    <div className="button-container">
      { content }
    </div>
  );
};

export default Buttons;
