import React from 'react';
import './Bidmanagement.css';
import NewNavbar from '../components/NewNavbar';

const Bidmanagement = () => {
  const data = [
    // Example data, you can replace it with dynamic data
    { username: 'xyz', state: 'Bidding', Bidvalue: '10eth', saltvalue: '567', minusageTime: 3},
  ];

  return (
    <div className="bid-management">
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
              <th>Username</th>
              <th>State</th>
              <th>Bid Value</th>
              <th>Salt Value</th>
              <th>Min Usage Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.username}</td>
                <td>{row.state}</td>
                <td>{row.Bidvalue}</td>
                <td>{row.saltvalue}</td>
                <td>{row.minusageTime}</td>
                <td><div className="button-container">
                    <button>Accept</button>
                    <button>Reject</button>
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Bidmanagement;
