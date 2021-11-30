export const fetchReviews = (productId) =>
  $.ajax({
    method: `GET`,
    url: `/api/products/${productId}/reviews`
  });

export const updateReview = (review) => {
  return $.ajax({
    url: `/api/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  });
};

export const createReview = (review) => {
  return $.ajax({
    url: `/api/reviews`,
    method: 'POST',
    data: { review }
  });
};

export const deleteReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'DELETE'
  });
};
