import React from 'react';
import { Link } from 'react-router-dom';

export default class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {cartItem}
    return (
      <li className='cart-index-item'>
        <Link to={`/products/${cartItem.product_id}`}>
        {/* <img src={cartItem.product.photoUrl} className="cart-index-image" />
        <p className="cart-index-name">{product.product_name}</p> */}
        <p>need to test img, name, and price</p>
        </Link>
      </li>
    )
  }
}
