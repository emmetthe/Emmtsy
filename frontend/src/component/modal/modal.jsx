import React from 'react';
import { connect } from 'react-redux';
import SignUpFormContainer from '../session_form/signup_form_container';
import LogInFormContainer from '../session_form/login_form_container';
import { closeModal } from '../../action/modal_action';
import CartContainer from '../cart/cart_container';
import { Link } from 'react-router-dom';
import './modal.css';

function Modal({ modal, closeModal }) {
  // if (!modal) {
  //   return null;
  // }

  let component;
  switch (modal) {
    case 'Sign in':
      component = <LogInFormContainer />;
      break;
    case 'Register':
      component = <SignUpFormContainer />;
      break;
    case 'Checkout':
      component = (
        <div>
          <h2>
            Thanks for testing out my app! If you enjoyed it please check out my other stuff
            <a className="checkout-modal" href="https://github.com/emmetthe" target="_blank">
              {' '}
              here!
            </a>
          </h2>
          <div onClick={closeModal} className="exit-modal">
            &times;
          </div>
        </div>
      );
      break;
    case 'Add to Cart':
      component = (
        <div>
          <h2 className="cart-modal-msg">Item has been added to cart</h2>
          <br />
          <Link className="view-cart-modal" to="/cart" onClick={closeModal}>
            View Cart
          </Link>
          <div onClick={closeModal} className="exit-modal">
            &times;
          </div>
        </div>
      );
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mSTP = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);
