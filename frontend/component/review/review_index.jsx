import React from 'react';
import ReviewShow from './review_show';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.product.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reviews.length !== this.props.reviews.length) {
      this.props.fetchReviews(this.props.product.id);
    }
  }

  render() {
    const { reviews, createReview, updateReview, deleteReview, currentUser } = this.props;

    let reviewList;
    if (reviews.length == 0) {
      reviewList = (
        <div className="review-empty">
          This item currently has no reviews. Be the first one to leave one here!
        </div>
      );
    } else {
      reviewList = (
        <ul className="review-index">
          {reviews.map((review) => (
            <ReviewShow
              key={review.id}
              currentUser={currentUser}
              review={review}
              updateReview={updateReview}
              createReview={createReview}
              deleteReview={deleteReview}
            />
          ))}
        </ul>
      );
    }

    return <div className="review-container">{reviewList}</div>;
  }
}

export default ReviewIndex;
