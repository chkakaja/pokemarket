import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class MessageInput extends Component { 

  clearInput(event) {
    event.target.value = '';
  }

  render() {
    return (
      <div className='message-input'>
        <form onSubmit={this.clearInput} action='sendMessage' method='post'>
          <input type='text' name='message' />
        </form>
      </div>
    );
  }
}
module.exports = MessageInput;