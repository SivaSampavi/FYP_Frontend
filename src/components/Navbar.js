import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/login" activeClassName="active">Log In</NavLink></li>
        <li><NavLink to="/signup" activeClassName="active">Sign Up</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
