import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserSubmit = this.demoUserSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
};

  componentWillUnmount() {
    this.props.clearSessionErrors();
  };

  update(field) {
    return event => (
      this.setState({ [field]: event.target.value})
    )
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  };

  demoUserSubmit(event) {
    event.preventDefault();
    this.props.login({ email: "demouser@gmail.com", password: "password" });
  };

  renderErrors() {
    let { errors } = this.props;

    if (errors.length === 0) {
      return null;
    }
    
    return (
      <div className="login-errors">
        {errors.join(" \u2022 ")}
      </div>   
    )
  };

  render() {
    return (
      <div className="form-page">
        <div className="form__wrapper">
          <form onSubmit={this.handleSubmit} > 
            <div className="form__header">
              <h1>Sign in to</h1>
              <img src={window.logo} alt=""/>
              <h1>Channels</h1>
            </div>
              <h3 className="login-input-header">
                Enter your email address and password.
              </h3>
            <div className="errors">
              {this.renderErrors()}
            </div>
            <div className="form__input">
              <input required
                  type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Please Type Your Email..." />
            </div>
            <div className="form__input">
              <input required
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  minLength="6"
                  placeholder="Input Password"/>
            </div>
            <div className='form__button'>
              <button type="submit">Login</button>
            </div>
            <div className='form__button'>
              <button onClick={this.demoUserSubmit}>Demo Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

export default LoginForm;