import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react';

export default class MessageInput extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  inputField(input) {  
    console.log(this.state.input);
    this.setState({ input });
  }

  enterKeyPress(e) {
    if (e.key === 'Enter' && this.state.input) {
      this.props.submit(this.state.input);
      this.clearInput();
    }
  }

  clickSubmit() {
    if (this.state.input) {
      this.props.submit(this.state.input);
      this.clearInput();
    }
  }

  clearInput() {
    this.setState({ input: '' });
  }

  render() {
    return (
      <div className='message-input'>
        <input className='message-input-box' 
               onKeyPress={e => this.enterKeyPress(e)} 
               onChange={e => this.inputField(e.target.value)} 
               type='text' 
               name="messages"
               value={this.state.input} />
        <button className='message-input-submit' onClick={this.clickSubmit.bind(this)}>Post</button>
      </div>
    );
  }
}
