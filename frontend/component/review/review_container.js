import { connect } from 'react-redux';
import { createReview, deleteReview, fetchReviews, updateReview } from '../../action/review_action';
import ReviewIndex from './review_index';

const mSTP = (state) => {
  return {
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users
  };
};

const mDTP = (dispatch) => {
  return {
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
  };
};

export default connect(mSTP, mDTP)(ReviewIndex);
