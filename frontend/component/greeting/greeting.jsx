import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className="header-buttons">
      <button className="header-button" onClick={() => openModal('Sign in')}>
        Sign in
      </button>
      <div className="header-cart-link">
        <Link to="/cart">go to cart</Link>
      </div>
    </div>
  );
  const personalGreeting = () => (
    <div>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
      <div className="header-cart-link">
        <Link to="/cart">go to cart</Link>
      </div>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
