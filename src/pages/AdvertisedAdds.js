// src/pages/Primaryuser.js
import React from 'react';
import './Primaryuser.css';
import Footer from '../components/Footer';
import NewNavbar from '../components/NewNavbar'; // Import NewNavbar component
import { Link } from 'react-router-dom';


function Advertisedadd() {
  return (
    <div className="primaryuser-page">
      <header>
        <NewNavbar /> {/* Include NewNavbar component */}
      </header>
      <header>
        <h2>Advertised Advertisements</h2>
      </header>
      <main>
        <div className="user-actions">
          <div>
          <Link to="/bidmanagement"><button>1</button></Link>
          </div>
          <div>
            <Link to="/bidmanagement"><button>2</button></Link>
          </div>
          <div>
          <Link to="/bidmanagement"><button>3</button></Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Advertisedadd;
