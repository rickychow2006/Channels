import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserSubmit = this.demoUserSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  };

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  update(field) {
      return event => (
          this.setState({ [field]: event.target.value })
      )
    };

  handleSubmit(event) {
      event.preventDefault();
      this.props.signup(this.state);
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
        <div className="signup-errors">
            {errors.join(" \u2022 ")}
        </div>   
    )
  };


  render() {
    return (
      <div className="form-page">
        <div className="form__wrapper">
          <form onSubmit={this.handleSubmit}> 
            <div className="form__header">
              <h1>Sign up with</h1>
              <img src={window.logo} alt=""/>
              <h1>Channels</h1>
            </div>
            <div className="errors">
              {this.renderErrors()}
            </div>
            <div className="form__input">
              <input 
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Please Type Your Username..."
              >
              </input>
            </div>
            <div className="form__input">
              <input
                  type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Please Type Your Email..."
              >
              </input>
            </div>
            <div className="form__input">
              <input
                  type="password"
                  value={this.state.password}
                  minLength="6"
                  onChange={this.update('password')}
                  placeholder="Input Password"
              >
              </input>
            </div>
            <div className='form__button'>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUpForm;