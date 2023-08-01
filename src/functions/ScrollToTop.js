import React, { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const scrollToTop = () => {
      // Scrolls to the top of the page with x and y coordinates both set to 0
      window.scrollTo(0, 0);
    };

    // Call the scrollToTop function when the component is mounted
    scrollToTop();
  }, []);

  return <></>;
};

export default ScrollToTop;
