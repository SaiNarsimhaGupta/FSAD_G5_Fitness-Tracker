// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>

        <Link to="/nutrition" style={{ textDecoration: 'none', color: 'black' }}>Nutrition Tracking</Link>
        <Link to="/goals" style={{ textDecoration: 'none', color: 'black' }}>Goal Setting</Link>
        <Link to="/workouts" style={{ textDecoration: 'none', color: 'black' }}>Workouts</Link>
      </div>
    </div>
  );
};

export default NavBar;
