import React from 'react';
import { withRouter } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      description: '',
      hideForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm() {
    this.setState({
      hideForm: !this.state.hideForm
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const productId = parseInt(this.props.match.params.productId);
    const review = Object.assign({}, this.state, {
      product_id: productId,
      reviewer_id: this.props.currentUser
    });
    this.props
      .createReview(review)
      .then(this.handleForm())
      .then(this.setState({ rating: 1, description: '' }));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div className="review-form-container">
        {this.props.currentUser ? (
          <form onClick={() => this.handleForm()}>
            {this.state.hideForm ? <button className="close-form">Cancel</button> : <button className="create-form">Create Review</button>}
          </form>
        ) : null}
        {this.state.hideForm ? (
          <form onSubmit={this.handleSubmit} className="review-form">
            <div className="form-rating">
              <label>Rating</label>
              <div>
                <StarRatingComponent
                  name="add-rating"
                  starCount={5}
                  value={parseFloat(rating)}
                  onStarClick={this.onStarClick.bind(this)}
                  className="add-star-rating"
                  starColor={'#222323'}
                  emptyStarColor={'#DDDCDC'}
                />
              </div>
            </div>

            <div className="form-description">
              <label>Description:</label>
              <div>
                <textarea className="form-textarea" value={this.state.description} onChange={this.update('description')} />
              </div>
            </div>

            <button className="form-add-review" type="submit">
              Add review
            </button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default withRouter(ReviewForm);
