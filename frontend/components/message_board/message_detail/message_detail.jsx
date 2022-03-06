import React from 'react';
import moment from 'moment';

class MessageDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const authorName = (message) => {
      return (this.props.users[message.authorId])? this.props.users[message.authorId].username:this.props.users[message.author_id].username
    }

    const userImage = (username) => {
      if (username == this.props.users[this.props.currentUser].username) {
        return <img src = {window.profile1}/>
      } else {
        return <img src = {window.profile2}/>
      }
    }
  
    const displayCreatedAt = (time) => {
      let display = moment(time);
      return display.format("MMM Do, hh:mm a");
    }
    return (
      <div className={`message-${this.props.message.id}`}>
      <div  className={`message-picture`}> 
        {userImage(authorName(this.props.message))}
      </div>
      <div className={`message-name-container`}> 
        <div className={`message-name`}>
          <div>{authorName(this.props.message)}</div> <span className={`message-time`}>{displayCreatedAt(this.props.message.created_at)}</span>
        </div>
      
        <div className={`message-body`}>{this.props.message.body
        }</div>
    </div>
  </div>
    )
  }
}



export default MessageDetail;