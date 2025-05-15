import React, { useEffect, useState } from "react";

const withOnlineStatus = (WrappedComponent) => {
  return (props) => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
    const [statusMessage, setStatusMessage] = useState(
      navigator.onLine ? "You are online" : "You are Offline!"
    );
    useEffect(() => {
      const handleOnlineStatus = () => {
        setOnlineStatus(true);
        setStatusMessage;
      };
      const handleOfflineStatus = (e) => {
        setOnlineStatus(false);
        setStatusMessage("You are Offline");
      };
      window.addEventListener("online", handleOnlineStatus);
      window.addEventListener("offline", handleOfflineStatus);

      return () => {
        window.removeEventListener("online", handleOnlineStatus);
        window.removeEventListener("offline", handleOfflineStatus);
      };
    }, []);

    return <WrappedComponent {...props} statusMessage={statusMessage} />;
  };
};

export default withOnlineStatus;
