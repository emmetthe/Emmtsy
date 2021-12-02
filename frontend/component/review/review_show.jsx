import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.review.id,
      reviewer_id: this.props.review.reviewer_id,
      product_id: this.props.review.product_id,
      rating: this.props.review.rating,
      description: this.props.review.description,
      showEditForm: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleDelete() {
    const { review } = this.props;
    this.props.deleteReview(review.id);
  }

  handleForm() {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { review, currentUser} = this.props;
    const {rating} = this.state

    const editReviewForm = this.state.showEditForm ? (
      <div className="review-edit-container">
        <h2 className="review-edit-header">Update Your Review</h2>
        <div className="review-rating-container">
          <p className="rating-label">Rating:</p>
          <div>
            <StarRatingComponent
              name="add-rating"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
              className="add-star-rating"
              starColor={'#222323'}
              emptyStarColor={'#DDDCDC'}
            />
          </div>
        </div>
        <textarea className="review-update-text" value={this.state.description} onChange={this.update('description')}></textarea>
        <button className="update-review" onClick={() => this.props.updateReview(this.state).then(this.handleForm())}>
          Update
        </button>
        <button className="exit-update" onClick={() => this.handleForm()}>
          Cancel
        </button>
      </div>
    ) : (
      <button onClick={() => this.handleForm()} className="edit-review">
        Edit
      </button>
    );

    if (currentUser != review.reviewer_id) {
      return (
        <div className="review-show-item">
          <div className="review-show-user">{review.username}</div>
          <div className="review-show-rating">
            Rating:
            <div>
              <StarRatingComponent
                name="rating"
                editing={false}
                starCount={5}
                value={parseFloat(rating)}
                starColor={'#222323'}
                emptyStarColor={'#DDDCDC'}
              />
            </div>
          </div>
          <div className="review-show-description">{review.description}</div>
        </div>
      );
    } else {
      return (
        <div className="review-show-container">
          {!this.state.showEditForm ? (
            <div className="review-show-item">
              <div className="review-show-user">{review.username}</div>
              <div className="review-show-rating">
                Rating:
                <div>
                  <StarRatingComponent
                    name="rating"
                    editing={false}
                    starCount={5}
                    value={parseFloat(rating)}
                    starColor={'#222323'}
                    emptyStarColor={'#DDDCDC'}
                  />
                </div>
              </div>
              <div className="review-show-description">{review.description}</div>
            </div>
          ) : null}
          <button className="delete-review" onClick={() => this.props.deleteReview(review.id)}>
            Delete
          </button>
          {editReviewForm}
        </div>
      );
    }
  }
}

export default ReviewShow;
