import React from 'react';
import { Link } from 'react-router-dom';

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { category, product } = this.props;
    console.log(product)
    return (
      <div className="category-item">
        <Link to={`/products/${product.id}`}>
          <img className="category-product-img" src={product.photoUrl} />
          <p className="category-product-name">{product.product_name}</p>
          {/* <p className="category-product-seller">{product.seller.username}</p> */}
          {/* {product.reviews.length !== 0 ? (
            <div className="category-product">
              <p className="category-sales">{storeStars[average]}</p>
              <p className="category-sales-num"> ({this.randomNumberGenerator()})</p>
            </div>
          ) : null} */}
        </Link>
          <p className="category-product-price">${product.price}</p>
      </div>
    );
  }
}

export default CategoryIndexItem;
