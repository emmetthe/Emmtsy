import React from 'react';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  handleAddToCart() {
    return console.log('cart not implemented');
  }

  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
    let randomNum = this.getRandomNum(1, 100);
    let randomSale = this.getRandomNum(1, 5000);
    const {product} = this.props;

    if (!product) return null;
    
    return (
      <div className="product-show-page">
        <div className="product-info">
          <div>
            <p className="product-show-name">{product.product_name}</p>
          </div>
          {/* <p className="product-show-seller">{NEED SELLER USERNAME}</p> */}
          <div className="rating-sales">
            <p className="sales">{randomSale} sales</p>
          </div>
          <div className="product-show-description">
            <h4 className="product-description">Description</h4>
            <p className="product-description-box">{product.description}</p>
          </div>
            <p className="product-in-stock">In Stock</p>
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
        </div>
      </div>
    );
  }
    
}

export default ProductShow;
