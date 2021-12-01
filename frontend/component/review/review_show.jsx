import React from 'react';

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      reviewer_id: this.props.reviewer_id,
      product_id: this.props.product_id,
      rating: this.props.rating,
      description: this.props.description
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const { review, currentUser } = this.props;

    if (!currentUser) {
      return (
        <div className="review-show-item">
          <div className="review-show-user">{review.username}</div>
          <div className="review-show-rating">{review.rating}</div>
          <div className="review-show-description">{review.description}</div>
        </div>
      );
    } else {
      return (
        <div className="review-show-container">
          <div className="review-show-item">
            <div className="review-show-user">{review.username}</div>
            <div className="review-show-rating">{review.rating}</div>
            <div className="review-show-description">{review.description}</div>
          </div>
          <button className="delete-review" onClick={() => this.props.deleteReview(review.id)}>
            Delete
          </button>
          <button>Edit</button>
        </div>
      );
    }
  }
}

export default ReviewShow;
