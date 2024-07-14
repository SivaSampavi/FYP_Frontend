// src/pages/Primaryuser.js
import React from 'react';
import './Secondaryuser.css';
import Footer from '../components/Footer';
import NewNavbar from '../components/NewNavbar'; // Import NewNavbar component
import { Link } from 'react-router-dom';


function Secondaryuser() {
  return (
    <div className="secondaryuser-page">
      <header>
        <NewNavbar /> {/* Include NewNavbar component */}
      </header>
      <main>
        <div className="user-actions">
          <div>
            <Link to="/browsead"><button>Browse Advertisement</button></Link>
          </div>
          <div>
          <Link to="/mybids"><button>My Bids</button></Link> 
          </div>
          <div>
          <Link to="/subidmanagement"><button>Bid Management</button></Link> 
          </div>
        </div>
      </main>
    </div>
  );
}

export default Secondaryuser;
