import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="login-modal" onClick={() => openModal('Sign in')}>
        Sign in
      </button>
    </nav>
  );
  const personalGreeting = () => (
    <button className="header-button" onClick={logout}>
      Log Out
    </button>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
