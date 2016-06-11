import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {reduxForm} from 'redux-form';
import { connect } from 'react-redux';

// look up documentation for redux-form for more insight on how this works
class SellItem extends Component {

  render() {
    const {fields: {itemTitle, itemDescription, itemDuration, itemPicture, itemStartingBid}, handleSubmit, resetForm} = this.props;
    const postItem = () => {
      // sending post request with all of the necessary fields
      $.post('/sellItem', {
        title: this.props.fields.itemTitle.value,
        description: this.props.fields.itemDescription.value,
        duration: 0,
        picture: 'http://randompokemon.com/sprites/animated/' + this.props.fields.itemPicture.value + '.gif',
        seller_id: this.props.user.id,
        originalPrice: this.props.fields.itemStartingBid.value,
        newPrice: this.props.fields.itemStartingBid.value,
        currentBid: this.props.fields.itemStartingBid.value,
        sold: 0
      });
      resetForm();
    };

    return (
      <div className='sell-item'>
        <h2 className='sell-item-title'>List Your Pokemon</h2>
        <form onSubmit={handleSubmit(postItem)} className='pure-form pure-form-aligned'>
          <fieldset>
            <div className='pure-control-group'>
              <label>Name: </label>
              <input type="text" className='pure-input-2-3' placeholder="Please enter a name" {...itemTitle}/>
            </div>
            <div className='pure-control-group'>
              <label>Price: </label>
              <input type="number" className='pure-input-2-3' placeholder="Please enter price" {...itemStartingBid}/>
            </div>
            <div className='pure-control-group'>
              <label>PokeDex Number: </label>
              <input type="text" className='pure-input-2-3' placeholder="Please add on PokeDex number" {...itemPicture}/>
            </div>
            <div className='pure-control-group'>
              <label>Description: </label>
              <textarea type="text" className='pure-input-2-3' placeholder="Pokemon's special skills" {...itemDescription}/>
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

// essentially a reducer for the form
SellItem = reduxForm({
  // a unique name for this form
  form: 'sellItem',
  // all the fields in your form
  fields: ['itemTitle', 'itemDescription', 'itemDuration', 'itemPicture', 'itemStartingBid']
})(SellItem);

module.exports = connect(mapStateToProps)(SellItem);

