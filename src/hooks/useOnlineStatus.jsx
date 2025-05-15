import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setStatusOnline] = useState(navigator.onLine);

  const [statusMessage, setStatusMessage] = useState(
    online ? "You are online" : "You are offline"
  );
  const handleOnlineStatus = () => {
    setStatusOnline(true);
  };
  const handleOfflineStatus = () => {
    setStatusOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);
    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);

  return statusMessage;
};

export default useOnlineStatus;
