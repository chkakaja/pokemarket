import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { dispatch } from 'redux';

import Message from './Message.jsx';
import MessageInput from './MessageInput.jsx';
import $ from 'jquery';

class MessageBox extends Component {

  static defaultProps = {
    userId: 1,
    messages: []
  }

  componentDidMount() {
    this.getMessages();
  }
  getMessages() {
    this.getMessagesAjax = setInterval( () => { 
      $.post('/getMessages', { user: window.userId, chatter: this.props.chatter }, 
        messages => {
          console.log(this.props.messages)
          this.props.updateMessages(messages, this.props.userId)
        });
    }, 1000);
  }

  render() {
    return (
      <div className='message-box'>
        <div className='messages'>
          {this.props.messages.map((message, index) => <Message msg={message} key={index} />)}
        </div>
        <div className='new-message'>
          <MessageInput />
        </div>
      </div>
    );
  }
}

var mapStateToProps = function(state) {
  return {
    messages: state.messages[1]
  };
};

var mapDispatchToProps = function(dispatch){
  return {
    updateMessages: function(messages, userId) {
      dispatch({ type: 'UPDATE_MESSAGES', messages: messages, userId: userId});
    }
  }
};
module.exports = connect(mapStateToProps,mapDispatchToProps)(MessageBox);
