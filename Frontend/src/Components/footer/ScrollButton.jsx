import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa"; 

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "yellowgreen",
          padding: "10px",
          width: "150px",
        }}
        onClick={scrollToTop}
      >
        <FaArrowCircleUp
          style={{
            display: visible ? "inline" : "none",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        />
        <span style={{}}>Back to top</span>
      </div>
    </button>
  );
};

export default ScrollButton;
