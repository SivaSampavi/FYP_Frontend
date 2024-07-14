// src/pages/Primaryuser.js
import React from 'react';
import './Primaryuser.css';
import Footer from '../components/Footer';
import NewNavbar from '../components/NewNavbar'; // Import NewNavbar component
import { Link } from 'react-router-dom';


function Primaryuser() {
  return (
    <div className="primaryuser-page">
      <header>
        <NewNavbar /> {/* Include NewNavbar component */}
      </header>
      <main>
        <div className="user-actions">
          <div>
          <Link to="/spectrumsharingform"><button>Create Advertisement</button></Link>
          </div>
          <div>
            <Link to="/spectrum-table"><button>Advertisement Management</button></Link>
          </div>
          <div>
          <Link to="/bidmanagement"><button>Bid Management</button></Link>
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
