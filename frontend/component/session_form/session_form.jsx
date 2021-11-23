import React from 'react';
import { closeModal } from '../../action/modal_action';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    let { errors } = this.props;
    if (typeof errors === 'undefined') {
      return null;
    }
    return (
      <div className="session-errors">
        {errors.map((error, i) => (
          <div key={i}>{error}</div>
        ))}
      </div>
    );
  }

  demoLogin(e) {
    e.preventDefault();
    const demo = {
      email: 'demo@gmail.com',
      password: '123456'
    };
    this.props.processForm(demo);
    this.props.closeModal();
  }

  render() {
    let userName;
    if (this.props.formType === 'Register') {
      userName = (
        <div>
          <label className="form-label username-label">
            Username
            <input type="text" value={this.state.username} onChange={this.update('username')} className="form-input"></input>
          </label>
        </div>
      );
    }

    let demoLogin;
    if (this.props.formType === 'Sign in') {
      demoLogin = <input type="submit" value="Demo User" className="form-submit-button" onClick={this.demoLogin} />;
    }

    return (
      <div className="session-modal">
        <div className="form-container">
          {this.props.modalForm}
          <form onSubmit={this.handleSubmit} className="form-box">
            <div className="modal-form">
              <div onClick={this.props.closeModal} className="exit-modal">
                &times;
              </div>
              <br />
              {this.renderErrors()}
              <div className="form">
                <h1 className='form-header'>{this.props.formType}</h1>
                <br />
                <label className="form-label email-label">
                  Email address
                  <input type="email" value={this.state.email} onChange={this.update('email')} className="form-input" />
                </label>
                {userName}
                <label className="form-label password-label">
                  Password
                  <input type="password" value={this.state.password} onChange={this.update('password')} className="form-input" />
                </label>
                <br />
                <input className="form-submit-button" type="submit" value={this.props.formType} />
              </div>
            </div>
          </form>
          {demoLogin}
        </div>
      </div>
    );
  }
}

export default SessionForm;
