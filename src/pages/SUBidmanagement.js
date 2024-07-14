import React from 'react';
import './SpectrumTable.css';
import { Link } from 'react-router-dom';
import NewNavbar from '../components/NewNavbar';

const SUBidManagement = () => {
  const data = [
    // Example data, you can replace it with dynamic data
    { id: 1, biddingvalue: 'Bidding', saltvalue: '10:00 AM', minusagetime: '12:00 PM', deposit: 5, remainingtime: 2, tokenstatus: 'claim'},
    { id: 1, biddingvalue: 'Bidding', saltvalue: '10:00 AM', minusagetime: '12:00 PM', deposit: 5, remainingtime: 2, tokenstatus: 'deposit reverted'}
  ];

  return (
    <div className="spectrum-table-page">
         <header>
        <NewNavbar /> {/* Include NewNavbar component */}
      </header>
      <header>
        <h2>Bid Management</h2>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Bidding Value</th>
              <th>Salt Value</th>
              <th>Minimum Usage Time</th>
              <th>Deposit</th>
              <th>Remaining Time</th>
              <th>Token Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.biddingvalue}</td>
                <td>{row.saltvalue}</td>
                <td>{row.minusagetime}</td>
                <td>{row.deposit}</td>
                <td>{row.remainingtime}</td>
                <td>{row.tokenstatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default SUBidManagement;
