import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="searched-product">
        <Link to={`products/${product.id}`}>
          <img src={product.photoUrl} className="searched-img" />
        </Link>
        <p className="search-product-name">{product.product_name}</p>
        <p>${product.price}</p>
      </div>
    );
  }
}

export default SearchIndexItem;
