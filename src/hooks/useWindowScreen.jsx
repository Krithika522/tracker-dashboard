import React from "react";
import { useState,useEffect } from "react";
const useWindowScreen = () => {
  const [widthAndHeight, setwidthAndHeight] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const handleResize = () => {
    setwidthAndHeight({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return widthAndHeight;
};

export default useWindowScreen;
