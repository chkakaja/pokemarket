import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react';
import Textarea from 'react-textarea-autosize';

export default class MessageInput extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  inputField(input) { 
    // Ugly hack to make sure the textarea is clear after pressing enter
    // Without this whenever enter is pressed the value will be '\n'
    if (input !== '\n') { 
      this.setState({ input });
    }
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
        <Textarea className='message-input-box' 
                  onKeyPress={e => this.enterKeyPress(e)} 
                  onChange={e => this.inputField(e.target.value)} 
                  type='text' 
                  name="messages"
                  value={this.state.input} 
                  maxRows={3}
                  minRows={1}/>
        <img src="images/send.png" className='message-input-submit' onClick={this.clickSubmit.bind(this)} />
      </div>
    );
  }
}
