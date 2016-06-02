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

  sendMessages (text) {
    sendMessage(this.props.userId, this.props.receiver, text);
    this.props.updateMessage(text, this.props.userId, this.props.receiver);
  }


  render() {
    return (
      <div className='message-box'
           style={{
              'borderTopLeftRadius': '5px',
              'borderTopRightRadius': '5px',
              'display': 'inline-block',
              'float': 'right',
              'background': 'white',
              'marginLeft': '5px',
              'boxShadow': '0 0 5px'
            }}>
        <div className='message-box-name' onClick={() => this.props.minimize(this.props.receiver)}
             style={{
                'top': '0px',
                'borderTopLeftRadius': '5px',
                'borderTopRightRadius': '5px',
                'background': '#3b5998',
                'color': 'white',
                'fontWeight': 'bold',
                'height': '30px',
                'textAlign': 'center',
                'paddingTop': '7px',
                'paddingBottom': '2px'
             }}>
          {this.props.receiverName}
        </div>
        <div className='message-box-messages'
             style={{
                width: '250px',
                height: '250px',
                overflow: 'scroll',
                padding: '8px'
             }}>
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
  console.log('state', state);
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
