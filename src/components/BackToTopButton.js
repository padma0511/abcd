import React, { useState, useEffect } from "react";

function BackToTopButton() {
  const [backToTopButton, setbackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {backToTopButton && (
        <button
          className="top-button"
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            width: "50px",
          }}
          onClick={scrollUp} // Add this line to attach scrollUp function to onClick event
        >
          ^
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
