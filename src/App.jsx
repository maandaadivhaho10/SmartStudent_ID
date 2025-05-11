import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
import './App.css';

function App() {
  const location = useLocation();

  // Add "/admin" to the list of routes where Navbar should be hidden
  const hideNavbarRoutes = ['/dashboard', '/admin'];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
