import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <main className="signup-page">
      <form className="signup-form">
        <label>
          Company name:
          <input type="text" name="companyName" />
        </label>
        <label>
          User name:
          <input type="text" name="userName" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <button type="submit">Create an Account</button>
        <p>Already have an account? <a href="/login">Log In</a></p>
      </form>
    </main>
  );
}

export default SignUp;
