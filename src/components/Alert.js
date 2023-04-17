import React, { useEffect, useState } from "react";

function Alert({ type, message, visible, setShowAlert }) {
  // Define the alert colors based on the type
  const alertColors = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  // Define the default alert type and message
  const defaultType = "info";
  const defaultMessage = "Something went wrong.";

  // Set the type and message to default if not provided
  type = type || defaultType;
  message = message || defaultMessage;
  const [showAlert, setShowAlert1] = useState(false);

  useEffect(() => {
    if (visible) {
      setShowAlert1(true);
      setTimeout(() => {
        setShowAlert1(false);
      }, 3000); // hide alert after 3 seconds
    }
  }, [visible]);
  const handleTransitionEnd = () => {
    if (!showAlert) {
      setShowAlert();
    }
  };
  return (
    <div
      className={`fixed bottom-4 right-4 m-4 p-4 rounded-lg shadow-lg transition-transform transform ${
        showAlert ? "translate-y-0" : "translate-y-full"
      } ${alertColors[type]}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <span className="font-bold">{type.toUpperCase()}:</span> {message}
    </div>
  );
}

export default Alert;
