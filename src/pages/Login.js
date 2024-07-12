// src/pages/Login.js
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" placeholder="Enter Username" />
        </div>
        <div className="form-group">
          <label>Private Key:</label>
          <input type="password" placeholder="Enter Private Key" />
        </div>
        <button type="submit">Log In</button>
      </form>
      <div className="links">
        <Link to="/signup">Don't you have an account?</Link>
        <Link to="#">Forgot Private Key?</Link>
      </div>
    </div>
  );
}

export default Login;
