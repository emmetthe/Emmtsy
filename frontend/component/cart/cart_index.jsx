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
    const { cart, createCart, deleteCartItem, updateCartItem, fetchCartItems } = this.props.cart;
    if (!cart) return null;

    const cartItems = cart.map((cartItem) => {
      return (
        <CartIndexItem
        key={cart.id}
        cartItem={cartItem}
        createCart={createCart}
        deleteCartItem={deleteCartItem}
        updateCartItem={updateCartItem}
        fetchCartItems={fetchCartItems}
        />
        );
      });
      
    return (
      <div className="cart-index-container">
        <div className="cart-item-container">
          <ul>{cartItems}</ul>
        </div>
      </div>
    );
  }
}

export default CartIndex;
