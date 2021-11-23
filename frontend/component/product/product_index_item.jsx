import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    return (
      <li className="product-index-item">
        <Link to={`/products/${product.id}`}>
          <img src={product.photoUrl} className="product-index-image" />
          <p className="product-index-name">{product.product_name}</p>
        </Link>
        <p className="product-index-price">${product.price}</p>
      </li>
    );
  }
}

export default ProductIndexItem;
