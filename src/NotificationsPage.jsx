// src/NotificationsPage.jsx
import React from "react";
import "./NotificationsPage.css";

const notifications = [
  {
    id: 1,
    title: "ID Ready for Pickup",
    message: "Your SmartStudent ID is now ready. Please collect it from the admin office.",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Submission Confirmed",
    message: "Your student information was successfully submitted.",
    time: "Yesterday",
  },
  {
    id: 3,
    title: "Verification Pending",
    message: "We are still verifying your student details. You’ll be notified once approved.",
    time: "2 days ago",
  },
  {
    id:4,
    title: "Verification Pending",
    message: "We are still verifying your student details. You’ll be notified once approved.",
    time: "2 days ago",
  },
  {
    id: 5,
    title: "Verification Pending",
    message: "We are still verifying your student details. You’ll be notified once approved.",
    time: "2 days ago",
  },
];

const NotificationsPage = () => {
  return (
    <div className="notifications-container">
      <h2 className="notifications-header">Notifications</h2>
      {notifications.map((note) => (
        <div key={note.id} className="notification-card">
          <h3>{note.title}</h3>
          <p>{note.message}</p>
          <span className="notification-time">{note.time}</span>
        </div>
      ))}
    </div>
  );
};

export default NotificationsPage;
