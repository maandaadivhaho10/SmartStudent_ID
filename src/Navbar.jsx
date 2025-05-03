import React from 'react';
import { Link } from 'react-router-dom';  // For navigation
import './MyNavBar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/signup" className="navbar-link">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
