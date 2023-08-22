import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors } from '../../action/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../action/modal_action';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Register',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    modalForm: (
      <button className="modal-form-button" onClick={() => dispatch(openModal('Sign in'))}>
        Sign in
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
