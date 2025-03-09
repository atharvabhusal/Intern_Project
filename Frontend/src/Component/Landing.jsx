import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
    <p>"🏡 Welcome to Auction Hut – Your Gateway to Exclusive Deals! 🎉

Get ready to explore thrilling auctions, place your bids, and win incredible treasures! 🏆💰 Whether you're hunting for rare collectibles or unbeatable bargains, Auction Hut is your ultimate destination.

Sign in or register now and start bidding on amazing deals today! 🚀🔥"</p>
          <div id='home1'>
        <Link to="/signup" className="nav-link1"><button>Signup</button></Link>
        <Link to="/signin" className="nav-link1"><button>Signin</button></Link>
        </div>
        </div>
  );
}

export default Landing;
