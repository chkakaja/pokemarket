import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { dispatch } from 'redux';

import Message from './Message.jsx';
import MessageInput from './MessageInput.jsx';
import $ from 'jquery';
import { socket, join, sendMessage } from '../socket.js';

class MessageBox extends Component {

  static defaultProps = {
    messages: []
  }

  componentDidMount() {
    this.getMessages();
    join(this.props.userId);
  }
  getMessages() {
    this.getMessagesAjax = setInterval( () => { 
      $.post('/getMessages', { user: window.userId, chatter: this.props.chatter }, 
        messages => {
          this.props.updateMessages(messages, this.props.userId)
        });
    }, 1000);
    $.post('/getMessages', { user: this.props.userId, chatter: this.props.receiver }, messages => {
      this.props.updateMessages(messages, this.props.receiver);
    });
  }

  sendMessages (text) {
    sendMessage(this.props.userId, this.props.receiver, text);
    this.props.updateMessage(text, this.props.userId, this.props.receiver);
  }

  render() {
    return (
      <div className='message-box'>
        <div className='messages'>
          {this.props.messages.map((message, index) => <Message msg={message} key={index} />)}
        </div>
        <div className='new-message'>
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

var mapDispatchToProps = function(dispatch){
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
    }
  };
};
module.exports = connect(mapStateToProps,mapDispatchToProps)(MessageBox);
