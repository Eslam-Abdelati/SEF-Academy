import { useState, useEffect } from "react";

const getScreenType = (width) => {
  if (width >= 992) return "larg";
  if (width >= 768) return "medium";
  return "small";
};
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [screenType, setScreenType] = useState(
    getScreenType(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setScreenType(getScreenType(newWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, screenType };
}

export default useWindowWidth;
