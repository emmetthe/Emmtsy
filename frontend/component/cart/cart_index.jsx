import CartIndexItem from './cart_index_item';
import React from 'react';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    const { cart } = this.props.cart;

    if (!this.props.cartItems) return null;

    return (
      <div className="cart-index-container">
        <ul className="cart-index">
          {cart.map((cartItem) => (
            <CartIndexItem key={cart.id} cartItem={cartItem} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CartIndex;
