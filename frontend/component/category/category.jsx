import React from 'react';
import CategoryIndexItem from './category_index_item'

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <ul className="category-container">
        {categories.map((category) => (
          <CategoryIndexItem category={category} key={category.id} />
        ))}
      </ul>
    );
  }
}

export default Category;
