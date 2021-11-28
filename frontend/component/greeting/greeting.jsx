import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className='session-buttons'>
      <button className="header-button" onClick={() => openModal('Sign in')}>
        Sign in
      </button>
      <Link to="/cart"><img className="cart-link" src={window.cart}/></Link>
    </div>
  );
  const personalGreeting = () => (
    <div>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
      <Link to="/cart"><img className="cart-link" src={window.cart}/></Link>
    </div>
  )

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
