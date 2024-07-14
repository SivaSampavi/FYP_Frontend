// src/components/NewNavbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NewNavbar.css';

function NewNavbar() {
  return (
    <nav className="new-navbar">
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/logout" activeClassName="active">Log Out</NavLink></li>
      </ul>
    </nav>
  );
}

export default NewNavbar;
