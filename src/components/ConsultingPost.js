import React from 'react';
import '../styles/AccordionPage.css'

const ConsultingPost = ({ header, text }) => {
  return (
    <div className="consulting-post">
      <h5 className="post-header play-font">{header}</h5>
      <p className="post-text trispace-font">{text}</p>
    </div>
  );
};

export default ConsultingPost;
