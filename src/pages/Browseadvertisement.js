import React from 'react';
import './Browseadvertisement.css';
import { Link } from 'react-router-dom';
import NewNavbar from '../components/NewNavbar';

const BrowseAdvertisement = () => {
  const data = [
    // Example data, you can replace it with dynamic data
    { provider: 'xyz', bandwidth: '20kHz', minBidvalue: '10eth', mindipValue: '10eth', biddingrounddeadline: '12.00p.m', bidrevealingrounddeadline: '11.p.m'}
  ];

  return (
    <div className="browse-add">
       <header>
        <NewNavbar /> {/* Include NewNavbar component */}
      </header>
      <header>
        <h2>Browse Advertisement</h2>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Bandwidth</th>
              <th>Min Bid Value</th>
              <th>Min Deposit Value</th>
              <th>Bidding Round Deadline</th>
              <th>Bid Revealing Round Deadline</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.provider}</td>
                <td>{row.bandwidth}</td>
                <td>{row.minBidvalue}</td>
                <td>{row.mindipValue}</td>
                <td>{row.biddingrounddeadline}</td>
                <td>{row.bidrevealingrounddeadline}</td>
                <td><Link to="/placebid"><button type="submit">Place Bid</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default BrowseAdvertisement;
