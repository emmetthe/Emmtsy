import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';

const Greeting = ({ currentUser, logout, openModal, fetchSearchedProducts }) => {
  const sessionLinks = () => (
    <div className='session-buttons'>
      <button className="header-button" onClick={() => openModal('Sign in')}>
        Sign in
      </button>
      <Link to="/cart"><img className="cart-link" src={window.cart}/></Link>
      <SearchBar fetchSearchedProducts={fetchSearchedProducts}/>
    </div>
  );
  const personalGreeting = () => (
    <div>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
      <Link to="/cart"><img className="cart-link" src={window.cart}/></Link>
      <SearchBar fetchSearchedProducts={fetchSearchedProducts}/>
    </div>
  )

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
