import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    return (
      <Link to={`/products/${product.id}`}>
        <li className="product-index-item">
          <p className="product-name">{product.product_name}</p>
          <p className="product-price">${product.price}</p>
        </li>
      </Link>
    );
  }
}

export default ProductIndexItem;
