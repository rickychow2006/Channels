import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search/search';

class TopBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div className ="main-top-bar">
        <div className = "top-bar-left">
          <img src={window.logo} />
          <p className='logo-text'>Channels</p>
          <button onClick={this.handleLogout}>Logout</button>
        </div>

        <div className="top-bar-mid">
          <Search />
        </div>
      </div>
    )
  }
}

export default TopBar;