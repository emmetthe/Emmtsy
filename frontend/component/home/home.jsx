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
      <div className="home-msg-container">
        <h2 className="home-msg">Welcome back, {this.props.currentUser.username}!</h2>
      </div>
    ) : (
      <div className="home-msg-container">
        <h2 className="home-msg">Enjoy these deals all week long!</h2>
      </div>
    );

    return (
      <div className="home-container">
        {welcomeMsg}
        <div className="home-text">
          <h2 className="home-item-text">Popular gifts right now</h2>
        </div>
        <div className="home-item">
          <HomeIndex products={this.props.products.slice(0, 5)} />
        </div>
        <div className="home-our-picks">
          <div className="our-pick-text">
            <h2 className="home-our-picks-text">Our Picks for you</h2>
          </div>
          <HomeIndex products={this.props.products.slice(6, 11)} />
        </div>
        <div className="home-text">
          <h2 className="home-explore-text">
            Explore one-of-a-kind finds for one-of-a-kind people There's no warehouse—just millions of people selling the things they love
          </h2>
        </div>
        <div className="home-explore">
          <HomeIndex products={this.props.products.slice(12, 16)} />
        </div>
      </div>
    );
  }
}

export default Home;
