import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import withMousePosition from "./hocs/withMousePosition";

import "./index.css";
import withWindowSize from "./hocs/withWindowSize";

import DisplayAll from "./Components/DisplayAllHOC";
import withOnlineStatus from "./hocs/withOnlineStatus";
import DisplayAllHooks from "./Components/DisplayAllHooks";

function App() {
  //HIGHER ORDER COMPONENT
  const EnhancedMouseDisplay = withWindowSize(
    withMousePosition(withOnlineStatus(DisplayAll))
  );
  //HIGHER ORDER COMPONET END
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4 py-8">
        <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md w-full text-center space-y-4 border border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">
            🎯 Tracker Dashboard
          </h1>

          <div className="text-lg text-gray-600 bg-gray-200 rounded-md py-3 px-4 shadow-inner flex flex-row items-center justify-between">
            {/* HOC Version */}
            <div>
              <h2 className="text-style">Using HOC</h2>
              <EnhancedMouseDisplay />
            </div>
            {/* Hook Version */}
            <div>
              <h2 className="text-style">Using custom hooks</h2>
              <DisplayAllHooks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
