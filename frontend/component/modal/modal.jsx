import React from 'react';
import { connect } from 'react-redux';
import SignUpFormContainer from '../session_form/signup_form_container';
import LogInFormContainer from '../session_form/login_form_container';
import { closeModal } from '../../action/modal_action';
import CartContainer from '../cart/cart_container';

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
