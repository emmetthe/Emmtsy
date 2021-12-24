import React from 'react';
import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategoryProducts(this.props.match.params.id);
  }

  render() {
    const { category, products } = this.props;
    if (!category) return null;

    return (
      <div>
        <div>
          <h1 className="category-header">{category.category_name}</h1>
        </div>
        <div className="category-section">
          <p className="category-section-all">All Categories &#8250; {category.category_name}</p>
          <p className="category-product-total">({products.length} results)</p>
        </div>
        <div className="category-product-container">
          {products.map((product) => (
            <CategoryIndexItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryIndex;
