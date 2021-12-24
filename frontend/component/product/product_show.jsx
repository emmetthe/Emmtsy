import React from 'react';
import ReviewContainer from '../review/review_container';
import ReviewFormContainer from '../review/review_form_container';
import StarRatingComponent from 'react-star-rating-component';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      description: '',
      rating: 1,
      showForm: false
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
    this.props.fetchReviews(this.props.match.params.productId);
  }

  handleForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleAddToCart(e) {
    e.preventDefault();
    const { createCart, updateCartItem, cartItem, currentUser, openModal, product } = this.props;
    const item = { user_id: currentUser, product_id: product.id, quantity: this.state.quantity };
    if (currentUser) {
      // product.id in cartItem ? updateCartItem(item) : createCart(item);
      createCart(item)
      openModal('Add to Cart')
    } else {
      openModal('Sign in');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview({
      reviewer_id: this.props.currentUser,
      product_id: this.props.product.id,
      rating: this.state.rating,
      description: this.state.description
    });
  }

  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
    let randomNum = 12;
    let randomSale = 231;
    const { product, reviews, currentUser } = this.props;

    if (!product) return null;
    if (typeof product.seller == 'undefined') return null;

    let ratings = [];
    reviews.map((review) => ratings.push(review.rating));
    let total = ratings.reduce((a, b) => a + b, 0);
    let average = Math.round(total / ratings.length);

    let reviewForm;
    if (
      currentUser
      // && currentUser != product.seller_id
    ) {
      reviewForm = <ReviewFormContainer currentUser={currentUser} />;
    }

    return (
      <div className="product-show-page">
        <div className="product-info-left">
          <img src={product.photoUrl} className="product-show-image" />
          <div className="review-product-container">
            <div className="review-header">{reviews.length} Reviews</div>

            {reviewForm}
            <ReviewContainer product={product} />
          </div>
        </div>
        <div className="product-info-right">
          <h2 className="product-show-name">{product.product_name}</h2>
          <span className="product-show-stars">
            <StarRatingComponent
              name="average-rating"
              editing={false}
              starCount={5}
              value={parseFloat(average)}
              starColor={'#222323'}
              emptyStarColor={'#DDDCDC'}
              starSpacing="15px"
            />
          </span>
          <p className="sales">{randomSale} sales</p>
          <div className="product-show-description">
            <h4 className="product-description">Description</h4>
            <p className="product-description-box">{product.description}</p>
          </div>
          <div className="product-price-stock">
            <h2 className="product-show-price">${product.price}</h2>
            <p className="product-stock">In Stock</p>
          </div>

          <div className="product-quantity-container">
            <label className="product-show-quantity">Quantity </label>
            <select className="product-quantity-box" onChange={this.update('quantity')}>
              <option value="1" defaultValue="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-add-item">
            <button onClick={this.handleAddToCart} className="add-item-button">
              Add to Cart
            </button>
          </div>
          <div className="hot-item-container">
            <div className="hot-item-cart">
              <p>Other people want this. Over {randomNum} people have this in their carts right now</p>
            </div>
          </div>
          <p className="product-show-seller">Meet your seller: {product.seller.username}</p>
        </div>
      </div>
    );
  }
}

export default ProductShow;
