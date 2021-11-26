import React from 'react';
import { Link } from 'react-router-dom';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="category-container">
        <div className="category-nav">
          <ul className="category-nav-list">
            {categories.map((category) => (
              <Link to={`/categories/${category.id}`} key={category.id}>
                <p className="category-element">{category.category_name}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Category;
