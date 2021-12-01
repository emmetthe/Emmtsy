import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../action/review_action';

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(null, mDTP)(ReviewForm);
