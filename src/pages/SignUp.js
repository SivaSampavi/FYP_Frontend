// src/pages/SignUp.js
import React from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function SignUp() {
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission (create account)

    // Redirect to the createdaccount page
    navigate('/createdaccount');
  };

  return (
    <main className="signup-page">
      <h2 className="signup-header">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Company name:
          <input type="text" name="companyName" placeholder="Enter the company name" />
        </label>
        <label>
          User name:
          <input type="text" name="userName" placeholder="Enter the user name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Enter your email" />
        </label>
        <button type="submit">Create an Account</button>
        <p>Already have an account? <a href="/login">Log In</a></p>
      </form>
    </main>
  );
}

export default SignUp;
