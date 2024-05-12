import React, { useState, useEffect, useContext} from "react";
import "./LoginPage.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [message, setMessage] = useState("");
  const { setAccessToken, setUserId } = useContext(AuthContext);

  useEffect(() => {
    document.body.classList.add("login-page");

    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  useEffect(() => {
    if (showRegistration) {
      setUsername("");
      setPassword("");
      setNewName("");
      setNewEmail("");
      setNewPassword("");
      setConfirmPassword("");
      setRole("USER");
      setMessage("");
    }
  }, [showRegistration]);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNewEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        const { access_token, user_ID, user_Name } = data;

        setAccessToken(access_token);
        setUserId(user_ID);
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login");
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: newName,
            email: newEmail,
            password: newPassword,
            role: role,
          }),
        }
      );
      if (response.ok) {
        console.log("Registration successful");
        setMessage("Registration successful. Please login to continue.");
        setShowRegistration(false);
      } else {
        setError("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An error occurred during registration");
    }
  };

  return (
    <>
      <header>
        <h1>FITNESS TRACKER WEB APPLICATION</h1>
      </header>
      <div className="login-container">
        <div className="login-box">
          <h2>{showRegistration ? "Register" : "Login"}</h2>
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
          <form
            onSubmit={
              showRegistration ? handleRegistrationSubmit : handleLoginSubmit
            }
          >
            {showRegistration && (
              <>
                <div className="input-group">
                  <label htmlFor="new-name">Name:</label>
                  <input
                    type="text"
                    id="new-name"
                    value={newName}
                    onChange={handleNewNameChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="new-email">Email:</label>
                  <input
                    type="email"
                    id="new-email"
                    value={newEmail}
                    onChange={handleNewEmailChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="new-password">Password:</label>
                  <input
                    type="password"
                    id="new-password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="role">Role:</label>
                  <select id="role" value={role} onChange={handleRoleChange}>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>
              </>
            )}
            {!showRegistration && (
              <>
                <div className="input-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
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
              </>
            )}
            <button type="submit">
              {showRegistration ? "Register" : "Login"}
            </button>
          </form>
          <p
            className="register-link"
            onClick={() => setShowRegistration(!showRegistration)}
          >
            {showRegistration ? "Back to Login" : "Register"}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
