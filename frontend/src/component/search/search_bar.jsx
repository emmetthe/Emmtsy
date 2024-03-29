import React from 'react';
import { withRouter } from 'react-router-dom';
import './search_bar.css';
import search from './assets/search.png'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  update(input) {
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleSearch(e) {
    e.preventDefault();
    const search = this.state.search;
    this.props.fetchSearchedProducts(search).then(() => this.props.history.push(`/search?search=${search}`));
    this.setState({ search: '' });
  }

  render() {

    return (
      // <div className="search-container">
      <form className="search-form-container" onSubmit={this.handleSearch}>
        <input
          type="text"
          className="search-bar"
          value={this.state.search}
          placeholder={'Search for anything'}
          onChange={this.update('search')}
        />
        <button type="submit" className="search-button" onClick={this.handleSearch}>
          <img src={search} onClick={this.handleSearch} className="search-img" />
        </button>
      </form>
      // </div>
    );
  }
}

export default withRouter(SearchBar);
