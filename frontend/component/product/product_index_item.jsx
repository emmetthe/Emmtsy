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
          <p className="product-name">{product.product_name}</p>
        </Link>
        <p className="product-price">${product.price}</p>
      </li>
    );
  }
}

export default ProductIndexItem;
