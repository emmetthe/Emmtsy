import React from 'react';
import {Link} from 'react-router-dom'

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {category} = this.props;

    return (
      // <div className="category-index-container">
        <Link to={`/categories/${category.id}`}>
          <p className="category-name">{category.category_name}</p>
        </Link>
      // </div>
    );
  }
}

export default CategoryIndexItem;
