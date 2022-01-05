import React from 'react';
import { MdFiberManualRecord as StatusIcon } from "react-icons/md";

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dropdown: "top-user-dropdown-noshow"
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  handleDropdownToggle(event){
    event.preventDefault();
    if (this.state.dropdown === "top-user-dropdown-noshow"){
      this.setState({dropdown: "dropdown__menu"})
    }else{
      this.setState({dropdown: "top-user-dropdown-noshow"})
    }
  }

  render() {

    return (
      <div className="top-user">
        <button onClick={this.handleDropdownToggle}><img className="top-user-pic" src={window.profile} ></img></button>
          <div className={this.state.dropdown}>
            <div className="menu__header">
              <div className="menu__avatar">
                <img className="menu__image" src={window.profile}/>
              </div>
              <div className="menu__name">
                <h2>{this.props.users[this.props.currentUser].username}</h2>
                <h3>
                  <StatusIcon className="status__icon"/>
                  <p>Active</p>
                </h3>
              </div>
            </div>
            <br/>
            <div className="menu__options">
              <div onClick={this.handleLogout}>Sign out of Channels</div>
            </div>
          </div>
      </div>
    )
  }
};

export default User;