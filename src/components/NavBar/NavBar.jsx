import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'; // Import your CSS file for styling

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleClick = (tabName) => {
    setActiveTab(tabName === activeTab ? '' : tabName);
  };

  const handleLogout = () => {
    // Perform any logout logic here
    // For example, clear user session, etc.
    navigate('/'); // Redirect to the login page after logout
  };

  return (
    <div className="navbar">
      <div className="logo">
        <FontAwesomeIcon icon={faUser} size="2x" className="avatar-icon" />
        <span className="logo-text">Welcome back</span>
      </div>

      <Link
        to="/dashboard"
        onClick={() => handleClick('Dashboard')}
        className={location.pathname === '/dashboard' ? 'active' : ''}
      >
        Dashboard
      </Link>

      <Link
        to="/nutrition"
        onClick={() => handleClick('Nutrition')}
        className={location.pathname === '/nutrition' ? 'active' : ''}
      >
        Nutrition Tracking
      </Link>

      <Link
        to="/goals"
        onClick={() => handleClick('Goals')}
        className={location.pathname === '/goals' ? 'active' : ''}
      >
        Goal Setting
      </Link>

      <Link
        to="/workouts"
        onClick={() => handleClick('Workouts')}
        className={location.pathname === '/workouts' ? 'active' : ''}
      >
        Workouts
      </Link>

      <button style={{ width: '60px' }} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default NavBar;
