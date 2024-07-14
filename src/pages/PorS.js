// src/pages/PorS.js
import React from 'react';
import './PorS.css';
import NewNavbar from '../components/NewNavbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function PorS() {
  return (
    <div className="pors-page">
      <main>
      <header>
        <NewNavbar /> {/* Include NewNavbar component */}
      </header>
        <div className="login-as">
          <label>Log In as a;</label>
          <div className="user-buttons">
            <Link to="/primaryuser"><button>Primary User</button></Link>
            <Link to="/secondaryuser"><button>Secondary User</button></Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PorS;
