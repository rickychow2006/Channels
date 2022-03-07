import React from 'react';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      prompt: "messageform-permission-noshow",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleNewLine = this.handleNewLine.bind(this);
    this.handleJoinChannel = this.handleJoinChannel.bind(this);
  }

  componentDidUpdate(prevProps){
    if (prevProps.currentChannel !== this.props.currentChannel){    
      this.setState({
        body: ""
      });
    }
  }
 
  update() {
    return (e) => {
      this.setState({
      body: e.currentTarget.value
    })};
  }

  handleSubmit(e){
    e.preventDefault();

    if (this.props.currentChannel){
     let dummy = Object.assign({},this.state)
     delete dummy[prompt]
    const message = Object.assign({}, dummy, {channel_id: this.props.currentChannel.id, author_id: this.props.currentUser});
    App.cable.subscriptions.subscriptions[1].speak(message);    
    }
    else if(this.props.currentDM){
      let dummy = Object.assign({},this.state)
     delete dummy[prompt]
      const message = Object.assign({}, dummy, {receiver_id: this.props.currentDM, author_id:this.props.currentUser});
      App.cable.subscriptions.subscriptions[1].speak(message);
    }

    this.setState({
      body:""
    })
  }

  handleNewLine(e){
    e.preventDefault();
    this.setState({body: this.state.body + '\r\n'})
  }

  handleKeypress(e){

  if (e.key === 'Enter' && e.ctrlKey) {
    this.handleNewLine(e);
  }else if (e.key === 'Enter' ){
   
    this.handleSubmit(e);
  }
  };
}
 