import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Message from './Message.jsx';
import MessageInput from './MessageInput.jsx';
import $ from 'jquery';
import { join, sendMessage } from '../socket.js';

class MessageBox extends Component {

  static defaultProps = {
    messages: []
  }

  componentDidMount() {
    this.getMessages();
    join(this.props.userId);
  }

  getMessages() {
    $.post('/getMessages', { sender: this.props.userId, receiver: this.props.receiver }, messages => {
      this.props.updateMessages(messages, this.props.receiver);
    });
  }

  sendMessages(text) {
    sendMessage(this.props.userId, this.props.receiver, text);
    this.props.updateMessage(text, this.props.userId, this.props.receiver);
  }

  min() {
    var messages = document.getElementsByClassName('message-box-messages')[0];
    var input = document.getElementsByClassName('message-box-new')[0];
    if (messages.style.display == "block") {
      messages.style.display = 'none';
      input.style.display = 'none';
    }
    else {
      messages.style.display = 'block';
      input.style.display = 'block';
    }
  }

  render() {
    return (
      <div className='message-box'>
        <div className='message-box-name' onClick={this.min}>
          <img src='https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_close-128.png' className='remove' onClick={() => this.props.minimize(this.props.receiver)} />
          {this.props.receiverName}
        </div>
        <div className='message-box-messages'>
          {this.props.messages.map((message, index) => <Message userId={this.props.userId} receiverName={this.props.receiverName} msg={message} key={index} />)}
        </div>
        <div className='message-box-new'>
          <MessageInput submit={this.sendMessages.bind(this)}/>
        </div>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    messages: state.messages[ownProps.receiver]
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    updateMessages: (messages, receiver) => {
      dispatch({ 
        type: 'UPDATE_MESSAGES', 
        messages, 
        receiver
      });
    },
    updateMessage: (message, sender, receiver) => {
      dispatch({
        type: 'UPDATE_MESSAGE',
        message: {
          sender, message, receiver
        }
      });
    },
    minimize: (receiverId) => {
      dispatch({
        type: 'MINIMIZE',
        receiverId
      })
    }
  };
};
module.exports = connect(mapStateToProps,mapDispatchToProps)(MessageBox);
