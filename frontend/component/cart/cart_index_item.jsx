import React from 'react';
import { Link } from 'react-router-dom';

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      product: this.props.id,
      quantity: this.props.cartItem.quantity
    };

    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.updateCartItem = this.props.updateCartItem.bind(this);
  }

  handleRemoveItem(e) {
    e.preventDefault();
    this.props.deleteCartItem(this.props.cartItem);
  }

  handleQuantity(e) {
    const { cartItem } = this.props;
    const item = { id: cartItem.id, product_id: cartItem.product_id, user_id: cartItem.user_id, quantity: e.currentTarget.value };
    this.setState({ quantity: e.target.value });
    this.props.updateCartItem(item);
  }

  render() {
    const { product_id, quantity, user_id, photoUrl, product_name, price } = this.props.cartItem;
    let totalPrice = quantity * price;
    return (
      <li className="cart-index-item">
        <Link to={`/products/${product_id}`}>
          <img src={photoUrl} className="cart-index-image" />
        </Link>
        <p className="cart-index-name">{product_name}</p>
        <div className="cart-index-quantity">quantity: {quantity}</div>
        <div className="cart-index-price">
          {quantity === 1 ? (
            <div>
              <span className="cart-item-price">${price}</span>
            </div>
          ) : (
            <div>
              <span className="cart-item-total">${totalPrice.toFixed(2)}</span>
              <span className="cart-item-single">(${price} each)</span>
            </div>
          )}
        </div>

        <select value={this.state.quantity} onChange={this.handleQuantity} className="cart-show-qty">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <button className="remove-cart-item" onClick={() => this.props.deleteCartItem(this.props.cartItem.id)}>
          Remove
        </button>
      </li>
    );
  }
}

export default CartIndexItem;
