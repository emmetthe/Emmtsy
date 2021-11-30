import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.location.search.split('=')[1]
    };
  }

  componentDidMount() {
    this.props.fetchSearchedProducts(this.state.search);
  }

  render() {
    const { products } = this.props;

    let filteredProducts = products.map((product) => (
      <SearchIndexItem key={product.id} product={product} />
    ));

    let results;
    if (filteredProducts.length === 0) {
      results = (
        <div className="empty-result">
          <h2 className="search-results-empty">We couldn't find any results</h2>;
          <br />
          <p className="search-results-empty">Try searching for something else instead?</p>
        </div>
      );
    } else {
      results = (
        <div>
          <p className="search-results">{filteredProducts.length} search result(s)</p>
          <div className="search-result-item">{filteredProducts}</div>
        </div>
      );
    }

    return <div className="search-container">{results}</div>;
  }
}

//   render() {
//     const { products } = this.props;

//     let filteredProduct = products.map((product) => {
//       return <SearchIndexItem key={product.id} product={product} />;
//     });

//     let matches;
//     if (products.length === 0) {
//       matches = <p className="search-results no-search">No Matches Found</p>;
//     } else {
//       matches = <p className="search-results">{products.length} search result(s)</p>;
//     }

//     return (
//       <div className="search-container">
//         {matches}
//         <div className="all-searched-products">{filteredProduct}</div>
//       </div>
//     );
//   }
// }

export default SearchIndex;