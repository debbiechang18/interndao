import React from 'react';
import "../styles/ParallaxSection.css"
import ScrollToTop from './ScrollTop';

const ParallaxContainer = () => {
  return (
    <div className="parallax-container">
      <section>
        <header className="p-header"><h1>HEADER 1</h1></header>
        <div className="p-content p-content-1"><h1>CONTENT</h1></div>
        <header className="p-header p-header-2"><h1>HEADER 2</h1></header>
        <div className="p-content p-content-2"><h1>CONTENT</h1></div>
        <header className="p-header p-header-3"><h1>HEADER 3</h1></header>
        <div className="p-content p-content-3"><h1>CONTENT</h1></div>
        <header className="p-header p-header-4"><h1>HEADER 4</h1></header>
        <div className="p-content p-content-4"><h1>CONTENT</h1></div>
        <header className="p-header p-header-5"><h1>HEADER 5</h1></header>
        <div className="p-content p-content-5"><h1>CONTENT</h1></div>
        <header className="p-header p-header-6"><h1>HEADER 6</h1></header>
        <div className="p-content p-content-6"><h1>CONTENT</h1></div>
        <header className="p-header p-header-7"><h1>HEADER 7</h1></header>
        <div className="p-content p-content-7"><h1>CONTENT</h1><h1>END</h1></div>
      </section>
      <ScrollToTop />
    </div>
  )
}

export default ParallaxContainer;
