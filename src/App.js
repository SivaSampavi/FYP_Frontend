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
import SpectrumTable from './pages/spectrumTable';
import Secondaryuser from './pages/Secondaryuser';
import Bidmanagement from './pages/Bidmanagement';
import Spectrumsharingform from './pages/Spectrumsharingform';
import BrowseAdvertisement from './pages/Browseadvertisement';
import PlaceBid from './pages/Placebid';
import MyBids from './pages/Mybids';
import RevealBid from './pages/Revealbid';
import SUBidManagement from './pages/SUBidmanagement';
import Advertisedadd from './pages/AdvertisedAdds';



function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>WELCOME TO BLOCKCHAIN BASED SPECTRUM SHARING PLATFORM FOR 5G AND BEYOND</h1>
  
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createdaccount" element={<CreatedAccount />} />
          <Route path="/pors" element={<PorS />} />
          <Route path="/primaryuser" element={<Primaryuser />} /> {/* Add route for Primaryuser page */}
          <Route path="/spectrum-table" element={<SpectrumTable />} />
          <Route path="/bidmanagement" element={<Bidmanagement />} />
          <Route path="/spectrumsharingform" element={<Spectrumsharingform />} />
          <Route path="/browsead" element={<BrowseAdvertisement />} />
          <Route path="/placebid" element={<PlaceBid />} />
          <Route path="/mybids" element={<MyBids/>} />
          <Route path="/revealbid" element={<RevealBid/>} />
          <Route path="/subidmanagement" element={<SUBidManagement />} />
          <Route path="/advertisedadd" element={<Advertisedadd />} />
          <Route path="/secondaryuser" element={<Secondaryuser />} /> {/* Add route for Secondaryuser page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
