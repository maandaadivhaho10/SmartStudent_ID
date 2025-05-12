import React, { useState } from 'react';
import StudentIDForm from './StudentIDForm';
import CheckStatusPage from './CheckStatusPage';
import NotificationsPage from './NotificationsPage';
import HelpPage from './HelpPage';
import LogoutPage from './LogoutPage';
import PickupPage from './PickupPage';
import { Link } from 'react-router-dom';
import { MdDashboard, MdCheckCircle, MdNotifications, MdHelpOutline, MdEventAvailable } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import './Dashboard.css';

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="dashboard-container">
      <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h2 className="sidebar-title">Menu</h2>
        <nav className="sidebar-nav">
          {/* Updated Link to navigate directly to home */}
          <Link to="#" onClick={() => setActivePage('home')}>
            <MdDashboard className="nav-icon" />
            Dashboard
          </Link>
          <Link to="#" onClick={() => setActivePage('checkStatus')}>
            <MdCheckCircle className="nav-icon" />
            Check Status
          </Link>
          <Link to="#" onClick={() => setActivePage('notifications')}>
            <MdNotifications className="nav-icon" />
            Notifications
          </Link>
          <Link to="#" onClick={() => setActivePage('settings')}>
            <MdHelpOutline className="nav-icon" />
            Help & Support
          </Link>
          <Link to="#" onClick={() => setActivePage('pickup')}>
            <MdEventAvailable className="nav-icon" />
            Schedule Pickup
          </Link>
          <Link to="#" onClick={() => setActivePage('logout')}>
            <FiLogOut className="nav-icon" />
            Log Out
          </Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        {activePage === 'home' && (
          <>
            <h1>Hello Maanda Adivhaho</h1>
            <p className='heading-p'>Welcome to the SmartStudentID. Use the menu to navigate.</p>
            <StudentIDForm />
          </>
        )}

        {activePage === 'checkStatus' && <CheckStatusPage />}
        {activePage === 'notifications' && <NotificationsPage/> }
        {activePage === 'settings' && <HelpPage/>}
         {activePage === 'pickup' && <PickupPage />}
        {activePage === 'logout' && <LogoutPage/>}
      </main>
    </div>
  );
};

export default Dashboard;
