import React from 'react';
import { Link } from 'react-router-dom';
import './categories.scss'

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
          <Link to={`/categories/${category.id}`}>
            <p className="category-name">{category.category_name}</p>
          </Link>
        ))}
      </ul>
    );
  }
}

export default Category;
