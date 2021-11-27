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
    const { cart, createCart, deleteCartItem, updateCartItem, fetchCartItems } = this.props;
    console.log('2',cart)
    if (!cart) return null;

    if (cart.length == 0) {
      return (
        <div className="empty-cart-containter">
          <h1 className="empty-cart">Your cart is empty.</h1>
        </div>
      );
    }

    const cartItems = cart.map((cartItem) => (
      <CartIndexItem
        key={cartItem.product_id}
        cartItem={cartItem}
        createCart={createCart}
        deleteCartItem={deleteCartItem}
        updateCartItem={updateCartItem}
        fetchCartItems={fetchCartItems}
      />
    ));

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
