import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'; // Import your CSS file for styling

const NavBar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleClick = (tabName) => {
    setActiveTab(tabName);
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
        className={activeTab === 'Dashboard' ? 'active' : ''}
        onClick={() => handleClick('Dashboard')}
      >
        Dashboard
      </Link>

      <Link
        to="/nutrition"
        className={activeTab === 'Nutrition' ? 'active' : ''}
        onClick={() => handleClick('Nutrition')}
      >
        Nutrition Tracking
      </Link>

      <Link
        to="/goals"
        className={activeTab === 'Goals' ? 'active' : ''}
        onClick={() => handleClick('Goals')}
      >
        Goal Setting
      </Link>

      <Link
        to="/workouts"
        className={activeTab === 'Workouts' ? 'active' : ''}
        onClick={() => handleClick('Workouts')}
      >
        Workouts
      </Link>

      <button style={{width:'60px'}}onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default NavBar;
