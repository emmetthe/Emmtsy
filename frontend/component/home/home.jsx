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
      <h2 className="home-msg">Welcome Back, {this.props.currentUser.username}!</h2>
    ) : (
      <h2 className="home-msg">Enjoy these deals all week long!</h2>
    );

    return (
      <div className="home-container">
        {welcomeMsg}
        <HomeIndex products={this.props.products.slice()}/>
      </div>
    );
  }
}

export default Home;
