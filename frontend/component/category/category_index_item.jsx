import React from 'react';
import { Link } from 'react-router-dom';

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { category, product } = this.props;
    return (
      <div className="category-item">
        <Link className='category-product-link' to={`/products/${product.id}`}>
          <img className="category-product-img" src={product.photoUrl} />
          <p className="category-product-name">{product.product_name}</p>
          <p className="category-product-seller">Sold by: {product.seller.username}</p>
          <p className="category-product-price">${product.price}</p>
        </Link>
      </div>
    );
  }
}

export default CategoryIndexItem;
