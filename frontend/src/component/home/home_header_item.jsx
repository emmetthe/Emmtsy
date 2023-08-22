import React from 'react';
import { Link } from 'react-router-dom';

class HomeIndexMid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div className="home-item-container">
        {/* <div className="home-header-item"> */}
        {products.map((product, i) => {
          if (i == 0) {
            return (
              <div className="home-header-item">
                <Link to={`/products/${product.id}`} className="home-header-link">
                  <img className="home-header-img" src={product.photoUrl} />
                </Link>
                <p>Gifts for her</p>
              </div>
            );
          }
        })}
        {products.map((product, i) => {
          if (i == 1) {
            return (
              <div className="home-header-item">
                <Link to={`/products/${product.id}`} className="home-header-link">
                  <img className="home-header-img" src={product.photoUrl} />
                </Link>
                <p>Gifts for him</p>
              </div>
            );
          }
        })}
        {products.map((product, i) => {
          if (i == 2) {
            return (
              <div className="home-header-item">
                <Link to={`/products/${product.id}`} className="home-header-link">
                  <img className="home-header-img" src={product.photoUrl} />
                </Link>
                <p>Gifts for kids</p>
              </div>
            );
          }
        })}
        {/* </div> */}
      </div>
    );
  }
}

export default HomeIndexMid;
