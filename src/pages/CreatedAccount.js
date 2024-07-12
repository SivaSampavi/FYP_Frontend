// src/pages/CreatedAccount.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CreatedAccount() {
  return (
    <div className="created-account">
      <main>
        <div className="created-message">
          <p>Your account has been created successfully.</p>
          <p>For more details, please check your email.</p>
          <button><a href="/login">Log In</a></button>
        </div>
      </main>
    </div>
  );
}

export default CreatedAccount;
