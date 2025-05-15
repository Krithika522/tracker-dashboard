import React, { useEffect, useState } from "react";

const withWindowSize = (WrappedComponent) => {
  return (props) => {
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
    return <WrappedComponent {...props} widthAndHeight={widthAndHeight} />;
  };
};

export default withWindowSize;
