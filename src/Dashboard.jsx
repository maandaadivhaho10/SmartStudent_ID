// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import StudentIDForm from './StudentIDForm'; // or adjust to correct path
import './Dashboard.css';

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard-container">
      <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h2 className="sidebar-title">Menu</h2>
        <nav className="sidebar-nav">
          <a href="#">check Status</a>
          <a href="#">Notifcations</a>
          <a href="#">Settings</a>
          <a href="#">Log Out</a>
        </nav>
      </aside>

      <main className="dashboard-main">
        <h1>Hello Maanda Adivhaho</h1>
        <p>Welcome to the SmartStudentID. Use the menu to navigate.</p>
        <StudentIDForm />  {/* Directly add the StudentIDForm component here */}
      </main>
    </div>
  );
};

export default Dashboard;
