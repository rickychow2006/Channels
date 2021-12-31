import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-page">
        <div className="form__wrapper">
          <form> 
            <div className="form__header">
              <h1>Sign up with Channels</h1>
            </div>
            <div className="errors">

            </div>
            <div className="form__input">
              <input 
                  type="text"
                  placeholder="Please Type Your Username..."
              >
              </input>
            </div>
            <div className="form__input">
              <input 
                  type="text"
                  placeholder="Please Type Your Display Name..."
              >
              </input>
            </div>
            <div className="form__input">
              <input
                  type="email"
                  placeholder="Please Type Your Email..."
              >
              </input>
            </div>
            <div className="form__input">
              <input
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

export default SignUpForm;