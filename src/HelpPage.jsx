// src/HelpPage.jsx
import React from "react";
import "./HelpPage.css";

const HelpPage = () => {
  const helpTopics = [
    {
      question: "How do I apply for a SmartStudent ID?",
      answer:
        "Go to the dashboard and fill out the Student ID form with your details. Make sure everything is correct before submitting.",
    },
    {
      question: "How do I check the status of my ID?",
      answer:
        "Click on the 'Check Status' option in the sidebar menu. You'll see whether your ID is pending, verified, or ready for pickup.",
    },
    {
      question: "What should I do if my ID is not approved?",
      answer:
        "Double-check that all your submitted information is accurate. If there’s still an issue, contact your institution’s admin office.",
    },
    {
      question: "Who can I contact for support?",
      answer:
        "You can contact student support at support@smartstudentid.edu or visit the help desk at your campus admin block.",
    },
  ];

  return (
    <div className="help-container">
      <h2 className="help-header">Help & Support</h2>
      {helpTopics.map((topic, index) => (
        <div key={index} className="help-card">
          <h3>{topic.question}</h3>
          <p>{topic.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default HelpPage;
