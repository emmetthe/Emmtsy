import React from 'react';
import CategoryIndexItem from './category_index_item';
import './categories.scss'

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategoryProducts(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchCategoryProducts(this.props.match.params.id);
    }
  }

  render() {
    const { category, products } = this.props;
    if (!category) return null;

    return (
      <div className="category-result-container">
        <div className="category-header">
          <p className="category-header-text">{category.category_name}</p>
          <p className="category-product-total">({products.length} results)</p>
        </div>
        {/* <p className="category-section-all">All Categories &#8250; {category.category_name}</p> */}
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
