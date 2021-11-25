import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div>
      <button className="header-button" onClick={() => openModal('Sign in')}>
        Sign in
      </button>
      <Link to="/cart">go to cart</Link>
    </div>
  );
  const personalGreeting = () => (
    <div>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
      <Link to="/cart">go to cart</Link>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
