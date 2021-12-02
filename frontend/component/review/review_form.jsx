import React from 'react';
import { withRouter } from 'react-router';

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
    this.props.createReview(review).then(this.handleForm());
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }
  render() {
    const { rating } = this.state;

    return (
      <div className="review-form-container">
        {!this.state.hideForm ? (
          <form onSubmit={this.handleSubmit} className="review-form">
            <div className="form-rating">
              <label>Rating (stars)</label>
            </div>

            <div className="form-description">
              <label>Description:</label>
              <div>
                <textarea value={this.state.description} onChange={this.update('description')} />
              </div>
            </div>
            <div className="form-buttons-container">
              <button type="submit">Add review</button>
            </div>
          </form>
        ) : null}
      </div>
    );
  }
}

export default withRouter(ReviewForm);
