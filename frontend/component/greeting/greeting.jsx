import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      {/* <Link className='sign-in' onClick={() => openModal('Sign in')} to="/login">Sign in</Link> */}
      <button className="login-modal" onClick={() => openModal('Sign in')}>
        Sign in
      </button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome back, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
