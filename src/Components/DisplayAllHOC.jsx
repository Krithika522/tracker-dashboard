import React from "react";

const DisplayAll = ({ widthAndHeight, mousePosition, statusMessage }) => {
  return (
    <div>
      <p className="p-4">Status: {statusMessage}</p>
      <p className="p-4">
        Window: ({widthAndHeight.w},{widthAndHeight.h})
      </p>
      <p className="p-4">
        Mouse: ({mousePosition.x}, {mousePosition.y})
      </p>
    </div>
  );
};

export default DisplayAll;
