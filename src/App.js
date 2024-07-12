// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CreatedAccount from './pages/CreatedAccount';
import PorS from './pages/PorS'; // Import the PorS page component
import Primaryuser from './pages/Primaryuser'; // Import the Primaryuser page component
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>WELCOME TO BLOCKCHAIN BASED SPECTRUM SHARING PLATFORM FOR 5G AND BEYOND</h1>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createdaccount" element={<CreatedAccount />} />
          <Route path="/pors" element={<PorS />} />
          <Route path="/primaryuser" element={<Primaryuser />} /> {/* Add route for Primaryuser page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
