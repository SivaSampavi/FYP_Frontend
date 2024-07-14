import React from 'react';
import Introduction from '../components/Introduction';
import Overview from '../components/Overview';
import Features from '../components/Features';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <main>
      <Navbar />
      <Introduction />
      <Overview />
      <Features />
    </main>
  );
}

export default Home;
