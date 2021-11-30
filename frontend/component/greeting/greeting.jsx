import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';

const Greeting = ({ currentUser, logout, openModal, fetchSearchedProducts }) => {
  const sessionLinks = () => (
    <div className="session-links">
      <Link to="/" className="header-link">
        <h1 className="logo">Emmtsy</h1>
      </Link>
      <button className="header-button" onClick={() => openModal('Sign in')}>
        Sign in
      </button>
      <Link to="/cart">
        <img className="cart-link" src={window.cart} />
      </Link>
      <SearchBar fetchSearchedProducts={fetchSearchedProducts} />
    </div>
  );
  const personalGreeting = () => (
    <div className="personal-greeting">
      <Link to="/" className="header-link">
        <h1 className="logo">Emmtsy</h1>
      </Link>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
      <Link to="/cart">
        <img className="cart-link" src={window.cart} />
      </Link>
      <SearchBar fetchSearchedProducts={fetchSearchedProducts} />
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
