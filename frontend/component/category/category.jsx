import React from 'react';

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
          <p className="category-name" key={category.id}>
            {category.category_name}
          </p>
        ))}
      </ul>
    );
  }
}

export default Category;
