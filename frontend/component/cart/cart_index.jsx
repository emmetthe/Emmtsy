import CartIndexItem from './cart_index_item';
import React from 'react';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
    this.props.fetchAllProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cart.length !== this.props.cart.length) {
      this.props.fetchCartItems();
    }
  }

  render() {
    const { cart, createCart, deleteCartItem, updateCartItem, fetchCartItems, user, products } = this.props;
    let itemTotal = 0;
    cart.forEach((item) => (itemTotal += parseFloat(item.price) * parseFloat(item.quantity)));

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
        key={cartItem.id}
        user={user}
        cartItem={cartItem}
        products={products}
        createCart={createCart}
        deleteCartItem={deleteCartItem}
        updateCartItem={updateCartItem}
        fetchCartItems={fetchCartItems}
      />
    ));

    return (
      <div className="cart-index-container">
        <div className="cart-item-container">
          <ul className="cart-items">{cartItems}</ul>
          <div className="cart-price-total">Item(s) total {itemTotal.toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default CartIndex;
