import React from 'react';
import HomeIndexItem from './home_index_item';

const HomeIndex = (props) => (
  <ul className="home-index">
    {props.products.map((product) => (
      <HomeIndexItem product={product} key={product.id} />
    ))}
  </ul>
);

export default HomeIndex;
