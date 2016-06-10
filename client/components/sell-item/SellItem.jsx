import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {reduxForm} from 'redux-form';
import { checkAuthentication } from './../../actions';
import { connect } from 'react-redux';

// look up documentation for redux-form for more insight on how this works
class SellItem extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const {fields: {itemTitle, itemDescription, itemDuration, itemPicture, itemStartingBid}, handleSubmit, resetForm} = this.props;
    const postItem = () => {
      // sending post request with all of the necessary fields
      $.post('/sellItem', {
        title: this.props.fields.itemTitle.value,
        description: this.props.fields.itemDescription.value,
        duration: 0,
        picture: this.props.fields.itemPicture.value,
        seller_id: this.props.user.id,
        originalPrice: this.props.fields.itemStartingBid.value,
        newPrice: this.props.fields.itemStartingBid.value,
        currentBid: this.props.fields.itemStartingBid.value,
        sold: 0
      });
      resetForm();
    };

    if (!this.props.user.id) {
      return <div>Sign in to sell items!</div>
    }
    return (
      <div className='sell-item'>
        <h2 className='sell-item-title'>Sell Your Item</h2>
        <form onSubmit={handleSubmit(postItem)} className='pure-form pure-form-aligned'>
          <fieldset>
            <div className='pure-control-group'>
              <label>Title: </label>
              <input type="text" className='pure-input-2-3' placeholder="What would you like the title to be?" {...itemTitle}/>
            </div>
            <div className='pure-control-group'>
              <label>Price: </label>
              <input type="number" className='pure-input-2-3' placeholder="What would you like your starting bid to be?" {...itemStartingBid}/>
            </div>
            <div className='pure-control-group'>
              <label>Picture: </label>
              <input type="url" className='pure-input-2-3' placeholder="Place a picture URL here" {...itemPicture}/>
            </div>
            <div className='pure-control-group'>
              <label>Description: </label>
              <textarea type="text" className='pure-input-2-3' placeholder="How would you describe your item?" {...itemDescription}/>
            </div>
            <div className='pure-controls'>
              <button type="submit" className='pure-button'>Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getUser: checkAuthentication(dispatch)
  }
};

// essentially a reducer for the form
SellItem = reduxForm({
  // a unique name for this form
  form: 'sellItem',
  // all the fields in your form
  fields: ['itemTitle', 'itemDescription', 'itemDuration', 'itemPicture', 'itemStartingBid']
})(SellItem);

module.exports = connect(mapStateToProps, mapDispatchToProps)(SellItem);

