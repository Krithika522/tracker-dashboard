import React from "react";
import useMousePosition from "../hooks/useMousePosition";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useWindowScreen from "../hooks/useWindowScreen";

const DisplayAllHooks = () => {
  const mouse = useMousePosition();
  const status = useOnlineStatus();
  const screenSize = useWindowScreen();
  return (
    <div>
      <p className="p-4">Status: {status}</p>
      <p className="p-4">
        Window: ({screenSize.w},{screenSize.h})
      </p>
      <p className="p-4">
        Mouse: ({mouse.x},{mouse.y})
      </p>
    </div>
  );
};

export default DisplayAllHooks;
