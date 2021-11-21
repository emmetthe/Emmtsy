import React from 'react';

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
    this.props.processForm(user);
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
  }

  render() {
    let firstName;
    if (this.props.formType === 'Register') {
      firstName = (
        <div>
          <label className="form-label username-label">
            Username:
            <input type="text" value={this.state.username} onChange={this.update('username')} className="form-input"></input>
          </label>
        </div>
      );
    }

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form-box">
          <br />
          Please {this.props.formType} or {this.props.navLink}

          {this.renderErrors()}

          <div className="form">
            <br />
            <label className="form-label email-label">
              Email:
              <input type="email" value={this.state.email} onChange={this.update('email')} className="form-input" />
            </label>
            <br />
            {firstName}
            <label className="form-label password-label">
              Password:
              <input type="password" value={this.state.password} onChange={this.update('password')} className="form-input" />
            </label>
            <br />
            <input className="form-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        <button className="demo-user-button" onClick={this.demoLogin}>
          Demo User
        </button>
      </div>
    );
  }
}

export default SessionForm;
