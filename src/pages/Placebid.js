import React from 'react';
import './Spectrumsharingform.css';
import { Link } from 'react-router-dom';
import NewNavbar from '../components/NewNavbar';


const PlaceBid= () => {
  return (
    <div className="container">
         <header>
        <NewNavbar /> {/* Include NewNavbar component */}
      </header>
      <form className="form">
        <label>
          Bidding Value:
          <input type="text" name="biddingvalue" />
        </label>
        <label>
          Salt Value:
          <input type="text" name="saltvalue" />
        </label>
        <label>
          Minimum Usage Time(In miutes):
          <input type="text" name="Minusagetime" />
        </label>
        <label>
          Deposit:
          <input type="text" name="deposit" />
        </label>
        <Link to="/secondaryuser"><button type="submit">PLACE BID</button></Link>
        
      </form>
    </div>
  );
};

export default PlaceBid;
