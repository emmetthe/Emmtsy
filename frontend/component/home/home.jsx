import React from 'react';
import HomeIndex from './home_index';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    const welcomeMsg = this.props.currentUser ? (
      <h2 className="home-msg">Welcome back, {this.props.currentUser.username}!</h2>
    ) : (
      <h2 className="home-msg">Enjoy these deals all week long!</h2>
    );

    return (
      <div className="home-container">
        {welcomeMsg}
        <div className="home-item">
          <HomeIndex products={this.props.products.slice(0, 7)} />
        </div>
        <div className="home-our-picks">
          <h2 className="home-our-picks-text">Our Picks for you</h2>
          <HomeIndex products={this.props.products.slice(0, 6)} />
        </div>
        <div className="home-explore">
          <h2 className="home-explore-text">
            Explore one-of-a-kind finds for one-of-a-kind people There's no warehouse—just millions of people selling the things they love
          </h2>
          <HomeIndex products={this.props.products.slice(0, 5)} />
        </div>
      </div>
    );
  }
}

export default Home;
