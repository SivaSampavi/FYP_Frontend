// src/pages/PorS.js
import React from 'react';
import './PorS.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function PorS() {
  return (
    <div className="pors-page">
      <main>
        <div className="login-as">
          <label>Log In as a;</label>
          <div className="user-buttons">
            <Link to="/primaryuser"><button>Primary User</button></Link>
            <button>Secondary User</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PorS;
