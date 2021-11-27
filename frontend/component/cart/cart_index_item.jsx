import React from 'react';
import { Link } from 'react-router-dom';

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: this.props.cartItem.quantity}
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
  }

  handleRemoveItem(e) {
    e.preventDefault();
    console.log('1', this.props.cartItem)
    this.props.deleteCartItem(this.props.cartItem);
  }

  render() {
    const { product_id, quantity, user_id, photoUrl, product_name, price } = this.props.cartItem;
    return (
      <li className="cart-index-item">
        <Link to={`/products/${product_id}`}>
          <img src={photoUrl} className="cart-index-image" />
        </Link>
        <p className="cart-index-name">{product_name}</p>
        <div className="cart-index-price">${price}</div>
        <div className="cart-index-quantity">quantity: {quantity}</div>
        <button onClick={this.handleRemoveItem}>Remove</button>
      </li>
    );
  }
}

export default CartIndexItem;
