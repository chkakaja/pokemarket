import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Message from './Message.jsx';
import MessageInput from './MessageInput.jsx';
import $ from 'jquery';
import { socket, join, sendMessage } from '../socket.js';

class MessageBox extends Component {

  static defaultProps = {
    messages: [],
    test: {
      test: {
        test: []
      }
    }
  }

  componentDidMount() {
    console.log('props', this.props);
    this.getMessages();
    join(this.props.userId);
  }
  getMessages() {
    $.post('/getMessages', { sender: this.props.userId, receiver: this.props.receiver }, messages => {
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
  console.log('state', state);
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
