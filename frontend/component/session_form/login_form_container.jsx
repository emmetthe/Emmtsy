import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../action/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../action/modal_action';

const mapStateToProps = ({ errors }) => {
  return {
    formType: 'Sign in',
    errors: errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    modalForm: (
      <button className="modal-form-button" onClick={() => dispatch(openModal('Register'))}>
        Register
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
