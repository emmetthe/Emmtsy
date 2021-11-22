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
    return 'test';
  }

  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    let randomNum = this.getRandomNum(1, 300);
    let randomSale = this.getRandomNum(1, 5000);
    const {product} = this.props;

    console.log(product.product_name, 'inside show')

    return (
      <div className="product-show-page">
        <div className="product-info">
          <div>
            <p className="product-show-name">{product.product_name}</p>
          </div>
          {/* <p className="product-show-seller">{product.seller.username}</p> */}
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
