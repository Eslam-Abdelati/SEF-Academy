import React from "react";

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-to-top position-absolute " onClick={scrollToTop}>
      <i className="fas fa-arrow-up"></i>
    </div>
  );
}

export default ScrollToTop;
