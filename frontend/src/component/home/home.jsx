import React from 'react';
import HomeIndex from './home_index';
import HomeIndexMid from './home_index_mid';
import HomeHeaderItem from './home_header_item'
import HomeIndexBot from './home_index_bot';
import "./home_page.css"

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
        <HomeHeaderItem products={this.props.products.slice(19, 22)}/>
      </div>
    ) : (
      <div className="home-msg-container">
        <h2 className="home-msg">Enjoy these deals all week long!</h2>
        <HomeHeaderItem products={this.props.products.slice(19, 22)}/>
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
          {/* <div className="our-pick-text">
            <h2 className="home-our-picks-text">Our Picks for you</h2>
          </div> */}
          <HomeIndexMid products={this.props.products.slice(6, 13)} />
        </div>
        <div className="home-text">
          <h2 className="home-explore-text">
            Shop our selections
          </h2>
        </div>
        <div className="home-explore">
          <HomeIndexBot products={this.props.products.slice(14, 19)} />
        </div>
      </div>
    );
  }
}

export default Home;
