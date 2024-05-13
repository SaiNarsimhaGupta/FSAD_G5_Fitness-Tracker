import React, { useState,useEffect } from 'react';
import './LoginPage.css'; // Import CSS for styling
import Dashboard from '../Dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]= useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    document.body.classList.add('login-page');

    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication logic
    if (username === 'admin' && password === 'password') {
      // Successful login
      console.log('Login successful');
       navigate('/dashboard');
      // Redirect to dashboard or home page
    } else {
      // Failed login
      setError('Invalid username or password');
    }
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Dummy registration logic
    console.log('Registration successful');
    setShowRegistration(false);
    // You can add logic to save new user details
  };

  return (
    <>
    <header>
  <h1>FITNESS TRACKER WEB APPLICATION</h1>
</header>
<div className="login-container">
  <div className="login-box">
    <h2>Login</h2>
    {error && <p className="error-message">{error}</p>}
    {showRegistration ? (
      <form onSubmit={handleRegistrationSubmit}>
        <div className="input-group">
          <label htmlFor="new-username">New Username:</label>
          <input
            type="text"
            id="new-username"
            value={newUsername}
            onChange={handleNewUsernameChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    ) : (
      <form onSubmit={handleLoginSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    )}
    <p className="register-link" onClick={() => setShowRegistration(!showRegistration)}>
      {showRegistration ? 'Back to Login' : 'Register'}
    </p>
  </div>
</div>
    </>
  );
};

export default LoginPage;
