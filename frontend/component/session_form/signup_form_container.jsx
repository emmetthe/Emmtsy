import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../action/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
  return {
    formType: 'Register',
    // errors: errors.session,
    navLink: <Link to="/login">Sign In</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);