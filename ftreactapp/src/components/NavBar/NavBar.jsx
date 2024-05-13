import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css'; // Import your CSS file for styling

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [userDetails, setUserDetails] = useState();

  const handleClick = (tabName) => {
    setActiveTab(tabName === activeTab ? '' : tabName);
  };

  const handleLogout = () => {
    // Perform any logout logic here
    // For example, clear user session, etc.
    navigate('/'); // Redirect to the login page after logout
  };

  const fetchData = async () => {
    const postData = {
      "name": "manohar123",
      "email": "manohar12@gamil.com",
      "password": "sai@123",
      "role": "user",
      "height": 165,
      "weight": 50
    }
    try {
      // Fetch data from the API
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData
),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log("data", data);
      setUserDetails(data);
      sessionStorage.setItem("accessToken", data.access_token);
      // Update state with response data
      // setResponseData(data);
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };

  useEffect(()=>{
    //fetchData();
  },[])

  return (
    <div className="navbarsection" style={{backgroundColor:"#FBFBFB"}}>
      

      <Link
        to="/dashboard"
        onClick={() => handleClick('Dashboard')}
        style={{marginRight:"auto", color:"#f36944"}}
        className={location.pathname === '/dashboard' ? 'active' : ''}
      >
        Activity Dashboard
      </Link>

      <div className="logo">
        {/* <FontAwesomeIcon icon={faUser} size="2x" className="avatar-icon" style={{color:"orange"}} /> */}
        <span className="logo-text" style={{marginRight:"10px"}}>{userDetails?.userName}</span>
      </div>

      {/* <Link
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
      </Link> */}

      {/* <Link
        to="/workouts"
        onClick={() => handleClick('Workouts')}
        className={location.pathname === '/workouts' ? 'active' : ''}
      >
        Workouts
      </Link> */}

      <button style={{ width: '100px', backgroundColor:"#f36944",textAlign:"center" }} onClick={handleLogout}>Logout 
      <FontAwesomeIcon icon={faRightToBracket} style={{marginLeft:"10px"}}/>
      </button>
    </div>
  );
};

export default NavBar;
