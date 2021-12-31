import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-page">
        <div className="form__wrapper">
          <form> 
            <div className="form__header">
              <h1>Sign in to Channels</h1>
            </div>
              <h3 className="login-input-header">
                Enter your email address and password.
              </h3>
            <div className="errors">

            </div>
            <div className="form__input">
              <input required
                  type="email"
                  placeholder="Please Type Your Email..."
              >
              </input>
            </div>
            <div className="form__input">
              <input required
                  type="password"
                  minLength="6"
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

export default LoginForm;