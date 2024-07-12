// src/pages/Login.js
import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for React Router v6

function Login() {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic

    // Redirect to the PorS page after login
    navigate('/pors');
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" placeholder="Enter Username" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter Password" />
        </div>
        <button type="submit">Log In</button>
      </form>
      <div className="links">
        <Link to="/signup">Don't you have an account?</Link>
        <Link to="#">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default Login;
