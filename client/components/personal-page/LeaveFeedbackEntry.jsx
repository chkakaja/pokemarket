import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import Textarea from 'react-textarea-autosize';

export default class LeaveFeedbackEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      submitted: false,
      input: '',
      error: null
    };
    this.comment = '';
  }
  static propTypes = {
    item: PropTypes.number.isRequired
  };

  selectChange(selected) {
    this.setState({ selected });
  }

  submitFeedback() {
    this.setState({ error: '' });
    if (this.state.selected && this.state.input.length > 19) {
      $.post('/leavefeedback', { item_id: this.props.item, 
                                 receiver_id: this.props.seller, 
                                 author_id: this.props.buyer, 
                                 rating: this.state.selected, 
                                 comment: this.state.comment }, 
        data => this.setState({submitted: true}));
      return;
    } 
    if (!this.state.selected) {
      this.setState({ error: 'Must select a rating' });
    } 
    if (this.state.input.length < 20) {
      this.setState({ error: (this.state.error ? this.state.error + ' & ' : '') + 'Comment must be at least 20 characters long'});
    }
    
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
      this.submitFeedback();
      this.clearInput();
    }
  }

  clearInput() {
    this.setState({ input: '' });
  }

  render() {
    if (this.state.submitted) {
      return (<div className="leave-feedback-entry">THANKS!</div>);
    }
    return (
      <div className="leave-feedback-entry">
        <img className='picture' src={this.props.picture} />
        <div className='leave-feedback-name'>{'Auction name: ' + this.props.title}</div>
        <div onClick={this.selectChange.bind(this, 1)} className={'leave-feedback-positive' + (this.state.selected === 1 ? ' leave-feedback-selected' : '') }>+1</div>
        <div onClick={this.selectChange.bind(this, 0)} className={'leave-feedback-neutral' + (this.state.selected === 0 ? ' leave-feedback-selected' : '') }>0</div>
        <div onClick={this.selectChange.bind(this, -1)} className={'leave-feedback-negative' + (this.state.selected === -1 ? ' leave-feedback-selected' : '') }>-1</div>
        <div className="leave-feedback-input-box">
          <span className='leave-feedback-comment-caption'><b>Comment:  </b></span>
          <Textarea className='leave-feedback-comment' 
            onKeyPress={e => this.enterKeyPress(e)} 
            onChange={e => this.inputField(e.target.value)} 
            type='text' 
            name="messages"
            value={this.state.input} 
            maxRows={5}
            minRows={1}/>
            <div className="leave-feedback-submit">
              <button onClick={this.submitFeedback.bind(this)}>Submit</button>
            </div>
        </div>
        <div className="leave-feedback-error">{this.state.error}</div>

      </div>
    );
  }
}