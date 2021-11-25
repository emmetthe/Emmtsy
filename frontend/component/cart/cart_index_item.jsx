import React from 'react';
import { Link } from 'react-router-dom';

export default class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchCartItems();
  // }

  render() {
    const { product_id, quantity, user_id, photoUrl, product_name, price } = this.props.cartItem;
    return (
      <li className="cart-index-item">
        <Link to={`/products/${product_id}`}>
          <img src={photoUrl} className="cart-index-image" />
          <p>need to test img, name, and price</p>
        </Link>
        <p className="cart-index-name">{product_name}</p>
        <div className="cart-index-price">{price}</div>
        <div className="cart-index-quantity">{quantity}</div>
      </li>
    );
  }
}
