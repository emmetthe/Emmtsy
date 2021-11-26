import React from 'react';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
      // testing fetch cart
    if(this.props.currentUser) {
      this.props.fetchCartItems();
    }

  }

  handleAddToCart(e) {
    e.preventDefault();
    const { createCart, updateCartItem, cartItem, currentUser, openModal, product} = this.props;
    const item = {user_id: currentUser, product_id: product.id, quantity: 1}
    if (currentUser) {
      cartItem[product.id] == product.id ? updateCartItem(cartItem) : createCart(item);
    } else {
      openModal('Sign in')
    }
  }

  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
    let randomNum = this.getRandomNum(1, 100);
    let randomSale = this.getRandomNum(1, 5000);
    const { product } = this.props;

    if (!product) return null;
    if (typeof product.seller == 'undefined') return null;

    return (
      <div className="product-show-page">
        <div className="product-info-left">
          <img src={product.photoUrl} className="product-show-image" />
          <div className="review-container">
            <div className="review-header">Reviews for this item (num reviews)</div>
            <div className="review-list">Reviews go here</div>
          </div>
        </div>
        <div className="product-info-right">
          <h2 className="product-show-name">{product.product_name}</h2>
          <p className="sales">{randomSale} sales</p>
          <div className="product-show-description">
            <h4 className="product-description">Description</h4>
            <p className="product-description-box">{product.description}</p>
          </div>
          <div className="product-price-stock">
            <h2 className="product-show-price">${product.price}</h2>
            <p className="product-stock">In Stock</p>
          </div>
          <div className="product-add-item">
            <button onClick={this.handleAddToCart} className="add-item-button">
              Add to Cart
            </button>
          </div>
          <div className="hot-item-container">
            <div className="hot-item-cart">
              <p>Other people want this. Over {randomNum} people have this in their carts right now</p>
            </div>
          </div>
          <p className="product-show-seller">Meet your seller: {product.seller.username}</p>
        </div>
      </div>
    );
  }
}

export default ProductShow;
