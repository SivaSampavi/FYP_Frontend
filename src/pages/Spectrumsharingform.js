import React from 'react';
import './Spectrumsharingform.css';
import { Link } from 'react-router-dom';
import NewNavbar from '../components/NewNavbar';

const Spectrumsharingform = () => {
  return (
    <div className="container">
       <header>
        <NewNavbar /> {/* Include NewNavbar component */}
      </header>
      <form className="form">
        <label>
          Bandwidth:
          <input type="text" name="bandwidth" />
        </label>
        <label>
          Minimum Bid value:
          <input type="text" name="minBidValue" />
        </label>
        <label>
          Minimum Deposit Value:
          <input type="text" name="minDepositValue" />
        </label>
        <label>
          Bidding Round Dead Line:
          <input type="text" name="biddingDeadline" />
        </label>
        <label>
          Bid Revealing Round Dead Line:
          <input type="text" name="bidRevealingDeadline" />
        </label>
        <Link to="/primaryuser"><button type="submit">CREATE</button></Link>
        
      </form>
    </div>
  );
};

export default Spectrumsharingform;
