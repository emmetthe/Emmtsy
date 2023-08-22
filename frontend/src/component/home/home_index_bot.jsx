import React from 'react';
import { Link } from 'react-router-dom';

class HomeIndexBot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div className="home-prod-bot-container">
        {products.map((product, i) => {
          if (i == 0) {
            return (
              <div className="prod-bot-item">
                <Link to={`/products/${product.id}`} className="home-bot-link">
                  <img className="home-bot-image" src={product.photoUrl} />
                </Link>
                <p>Gifts for Her</p>
              </div>
            );
          }
        })}
        {products.map((product, i) => {
          if (i == 1) {
            return (
              <div className="prod-bot-item">
                <Link to={`/products/${product.id}`} className="home-bot-link">
                  <img className="home-bot-image" src={product.photoUrl} />
                </Link>
                <p>Gifts for Him</p>
              </div>
            );
          }
        })}
        {products.map((product, i) => {
          if (i === 4) {
            return (
              <div className="prod-bot-item">
                <Link to={`/products/${product.id}`} className="home-bot-link">
                  <img className="home-bot-image" src={product.photoUrl} />
                </Link>
                <p>Gifts for Kids</p>
              </div>
            );
          }
        })}
        {products.map((product, i) => {
          if (i === 2) {
            return (
              <div className="prod-bot-item">
                <Link to={`/products/${product.id}`} className="home-bot-link">
                  <img className="home-bot-image" src={product.photoUrl} />
                </Link>
                <p>Holiday Decor</p>
              </div>
            );
          }
        })}
        {products.map((product, i) => {
          if (i === 3) {
            return (
              <div className="prod-bot-item">
                <Link to={`/products/${product.id}`} className="home-bot-link">
                  <img className="home-bot-image" src={product.photoUrl} />
                </Link>
                <p>Home Decor</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default HomeIndexBot;
