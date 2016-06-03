import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

export default class LeaveFeedbackEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      submitted: false
    };
    this.comment = '';
  }
  static propTypes = {
    item: PropTypes.number.isRequired
  };

  selectChange(selected) {
    this.setState({ selected });
  }

  commentChange(e) {
    this.comment = e.target.value;
  }

  submitFeedback() {
    $.post('/leavefeedback', { item_id: this.props.item, 
                               receiver_id: this.props.seller, 
                               author_id: this.props.buyer, 
                               rating: this.state.selected, 
                               comment: this.props.comment }, 
      data => this.setState({submitted: true}));
  }
  render() {
    if (this.state.submitted) {
      return (<div className="leave-feedback-entry">THANKS!</div>);
    }
    return (
      <div className="leave-feedback-entry">
        <div>{this.props.title}</div>
        <div onClick={this.selectChange.bind(this, 1)} className={'leave-feedback-positive' + (this.state.selected === 1 ? ' leave-feedback-selected' : '') }>+1</div>
        <div onClick={this.selectChange.bind(this, 0)} className={'leave-feedback-neutral' + (this.state.selected === 0 ? ' leave-feedback-selected' : '') }>0</div>
        <div onClick={this.selectChange.bind(this, -1)} className={'leave-feedback-negative' + (this.state.selected === -1 ? ' leave-feedback-selected' : '') }>-1</div>
        <div className="leave-feedback-input-box">
          <input className="leave-feedback-comment" onChange={(e) => this.commentChange(e)} />
        </div>
        <div className="leave-feedback-submit">
          <button onClick={this.submitFeedback.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}