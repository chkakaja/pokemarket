import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class MessageInput extends Component { 

  inputField(text) {
    this.setState({
      input: text
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className='message-input'>
        <input onChange={e => this.inputField(e.target.value)} type='text' name="messages" />
        <button onClick={event => this.props.submit(this.state.input)}>Post</button>
      </div>
    );
  }
}
