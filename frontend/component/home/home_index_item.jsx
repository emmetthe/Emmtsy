import React from "react";
import { Link } from "react-router-dom";

const HomeIndexItem = ({product}) => (
  <li className="home-index-item">
    <Link to={`/products/${product.id}`}>
      <img src={product.photoUrl} className="home-index-image" />
      <p className="home-index-name">{product.product_name}</p>
    </Link>
    <p className="home-index-price">${product.price}</p>
  </li>
);

export default HomeIndexItem;