// src/LogoutPage.jsx
import React, { useEffect } from "react";
import "./LogoutPage.css";

const LogoutPage = () => {
  useEffect(() => {
    // Simulate clearing session or auth token
    setTimeout(() => {
      // Example: redirect to login or homepage
      window.location.href = "/";
    }, 2000); // 2 second delay
  }, []);

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h2>Logging Out...</h2>
        <p>You are being securely logged out of the SmartStudent ID system.</p>
        
      </div>
    </div>
  );
};

export default LogoutPage;
