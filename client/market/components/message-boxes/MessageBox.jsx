import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { join, sendMessage } from './../../socket.js';

import Messages from './Messages.jsx';
import MessageInput from './MessageInput.jsx';

class MessageBox extends React.Component {

  static defaultProps = {
    messages: []
  }

  componentDidMount() {
    console.log(this.props.hide);
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
    this.props.hideMessages(this.props.receiver);
  }

  renderMessages(hide) {
    if (!hide) {
      return (
        <div className='messages-input-wrapper'> 
          <Messages messages={this.props.messages} userId={this.props.userId} receiverName={this.props.receiverName} />
          <MessageInput submit={this.sendMessages.bind(this)}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="message-box-container">
        <div className='message-box'>
          <div className='message-box-name' onClick={this.min.bind(this)}>
            <div className='message-box-name-text'>{this.props.receiverName.slice(0, 15)}</div>
            <img src='images/xbutton.png' className='remove' onClick={() => this.props.minimize(this.props.receiver)} />
          </div>
          {this.renderMessages(this.props.hide)}
        </div>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    messages: state.messages[ownProps.receiver],
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
    minimize: receiverId => {
      dispatch({
        type: 'MINIMIZE',
        receiverId
      })
    },
    hideMessages: receiverId => {
      dispatch({
        type: 'HIDE',
        receiverId
      })
    }
  };
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(MessageBox);
