import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';

export default class Messages extends Component {


  componentDidUpdate() {
    let node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }


  render() {
    return (
      <div className='message-box-messages'>
        {this.props.messages.map((message, index) => 
          <Message userId={this.props.userId} 
                   receiverName={this.props.receiverName} 
                   msg={message} 
                   key={index} 
          />
        )}
      </div>
    );
  }
}