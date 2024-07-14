import React from 'react';
import './SpectrumTable.css';

const SpectrumTable = () => {
  const data = [
    // Example data, you can replace it with dynamic data
    { id: 1, state: 'Bidding', startTime: '10:00 AM', endTime: '12:00 PM', noOfBids: 5 },
    { id: 2, state: 'Bid Revealing', startTime: '1:00 PM', endTime: '3:00 PM', noOfBids: 8 },
  ];

  return (
    <div className="spectrum-table-page">
      <header>
        <h2>Advertisement Management</h2>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>State</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>No of Bids</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.state}</td>
                <td>{row.startTime}</td>
                <td>{row.endTime}</td>
                <td>{row.noOfBids}</td>
                <td><button>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default SpectrumTable;
