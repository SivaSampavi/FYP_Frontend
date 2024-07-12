// src/pages/Primaryuser.js
import React from 'react';
import './Primaryuser.css';
import Footer from '../components/Footer';
import NewNavbar from '../components/NewNavbar'; // Import NewNavbar component

function Primaryuser() {
  return (
    <div className="primaryuser-page">
      <header>
        <NewNavbar /> {/* Include NewNavbar component */}
      </header>
      <main>
        <div className="user-actions">
          <div>
            <button>Create Advertisement</button>
          </div>
          <div>
            <button>Advertisement Management</button>
          </div>
          <div>
            <button>Bid Management</button>
          </div>
          <div>
            <button>Notifications</button>
          </div>
          <div>
            <button>Financial Management</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Primaryuser;
