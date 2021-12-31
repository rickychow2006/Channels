import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='nav-bar'>
        <div className='navbar-left'>
          <Link to ='/' className='nav-home-link'>
            <img src={window.logo} className='channel-logo'/>
            <p className='logo-text'>Channels</p>
          </Link>
        </div>
        <div className='navbar-right'>
          <Link to='/login' className='nav-login-link'>Sign In</Link>
          <Link to='/signup' className='nav-signup-link'>Get Started</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar;