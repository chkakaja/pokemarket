import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Message from './Message.jsx';
import MessageInput from './MessageInput.jsx';
import $ from 'jquery';

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }
  componentDidMount() {
    this.getMessages();
  }
  getMessages() {
    this.getMessagesAjax = setInterval( () => { 
      $.post('/getMessages', { user: window.userId, chatter: this.props.chatter }, messages => this.setState({ messages: messages }, ()=>console.log(this.state.messages)));
    }, 1000);
  }

  render() {
    return (
      <div className='message-box'>
        <div className='messages'>
          {this.state.messages.map((message, index) => <Message msg={message} key={index} />)}
        </div>
        <div className='new-message'>
          <MessageInput />
        </div>
      </div>
    );
  }
}
console.log('getting here');
ReactDOM.render(<MessageBox />, document.getElementById('app'));