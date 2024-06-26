import React from "react";
import "../styles/alert.css";

function Alert({ message, success }) {
  if (!message) return null;

  return (
    <div className={`alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
}

export default Alert;
