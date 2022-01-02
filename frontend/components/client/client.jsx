import React from 'react';

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Logout</button>
    )
  }
}; 

export default Client;