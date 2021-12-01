import * as APIUtil from '../util/review_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
});

const receiveReviewErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const fetchReviews = (productId) => (dispatch) => {
  return APIUtil.fetchReviews(productId).then((reviews) => dispatch(receiveReviews(reviews)));
};

export const createReview = (review) => (dispatch) => {
  return APIUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (error) => dispatch(receiveReviewErrors(error))
  );
};

export const updateReview = (review) => (dispatch) => {
  return APIUtil.updateReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (error) => dispatch(receiveReviewErrors(error))
  );
};

export const deleteReview = (reviewId) => (dispatch) => {
  return APIUtil.deleteReview(reviewId).then(
    () => dispatch(removeReview(reviewId)),
    (error) => dispatch(receiveReviewErrors(error))
  );
};
