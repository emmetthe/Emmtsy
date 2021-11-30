import React from "react";
import CategoryShow from './category_show'

class CategoryIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchedSearchedProducts();
  }

  render() {
    return (
      <div className='category-index-container'>

      </div>
    )
  }
}

export default CategoryIndex;