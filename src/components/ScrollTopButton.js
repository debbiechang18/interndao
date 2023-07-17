import React, { useEffect, useState } from "react";
import arrow from "../assets/up-arrow.png";
import "../styles/ScrollTop.css"

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100; // Adjust this value to set the scroll threshold

    setShowScrollTop(scrollPosition > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-top-button ${showScrollTop ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <img src={arrow} alt="Scroll to top" className="up-arrow-icon" />
    </button>
  );
};

export default ScrollTop;
