import React from 'react';
import ProductIndexItem from './product_index_item';
import './products.scss'

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <ul className="product-index">
        {products.map((product) => (
          <ProductIndexItem product={product} key={product.id} />
        ))}
      </ul>
    );
  }
}

export default ProductIndex;