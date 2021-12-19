import React from 'react';
import { Link } from 'react-router-dom';

class HomeIndexMid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div className="home-product-mid">
        <div className="home-product-side">
          <div className="home-product-top">
            <div className="home-text-mid">
              <p className='editor-pick'>Editor's Picks</p>
              <h2>Last-minute gift ideas</h2>
            </div>
            <div className="mid-img">
            {products.map((product, i) => {
              if (i < 2) {
                return (
                  <Link to={`/products/${product.id}`} className="home-top-link">
                    <img className="home-mid-img home-index-image" src={product.photoUrl} />
                  </Link>
                );
              }
            })}
            </div>
        
          </div>
          <div className="home-product-bot">
            {products.map((product, i) => {
              if (i > 1 && i < 6) {
                return (
                  <Link to={`/products/${product.id}`} className="home-mid-link">
                    <img className="home-mid-img home-index-image" src={product.photoUrl} />
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div className="home-mid-main">
          {products.map((product, i) => {
            if (i === 6) {
              return (
                <Link to={`/products/${product.id}`} className="home-mid-link">
                  <img className="home-pics-main" src={product.photoUrl} />
                </Link>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default HomeIndexMid;
