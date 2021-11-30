import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.searchText
    };
  }

  componentDidMount() {
    this.props.fetchSearchedProducts(this.state.search);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products.length !== this.props.products.length) {
      this.props.fetchAllProducts();
    }
  }

  render() {
    const { products } = this.props;

    let searchProducts = products.filter((product) => product.product_name.toLowerCase().includes(this.state.search.toLowerCase()));

    let matches;
    if (searchProducts.length === 0) {
      matches = (
        <div className="empty-result">
          <h2 className="search-results-empty">We couldn't find any results for {this.state.search}</h2>;
          <br />
          <p className="search-results-empty">Try searching for something else instead?</p>
        </div>
      );
    } else {
      matches = (
        <div>
          <p className="search-results">{searchProducts.length} search result(s)</p>
          {searchProducts.map((product) => (
            <SearchIndexItem key={product.id} product={product} />
          ))}
        </div>
      );
    }

    return <div className="search-container">{matches}</div>;
  }
}

export default SearchIndex;
