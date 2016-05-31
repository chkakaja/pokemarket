import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {reduxForm} from 'redux-form';
import $ from 'jquery';

class SellItem extends Component {
  render() {
    const {fields: {itemTitle, itemDescription, itemDuration, itemPicture}, handleSubmit, resetForm} = this.props;
    const postItem = () => {
      $.post('/sellItem', {
        title: this.props.fields.itemTitle.value,
        description: this.props.fields.itemDescription.value,
        duration: this.props.fields.itemDuration.value,
        picture: this.props.fields.itemPicture.value
      });
      resetForm();
    };
    return (
      <form onSubmit={handleSubmit(postItem)}>
        <div>
          <label>Title: </label>
          <input type="text" placeholder="What would you like the title to be?" {...itemTitle}/>
        </div>
        <div>
          <label>Description: </label>
          <input type="text" placeholder="How would you describe your item?" {...itemDescription}/>
        </div>
        <div>
          <label>Duration (in days): </label>
          <input type="number" placeholder="How long would you like your item to be on the market?" {...itemDuration}/>
        </div>
        <div>
          <label>Picture: </label>
          <input type="url" placeholder="Place a picture URL here" {...itemPicture}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

SellItem = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'sellItem',                           // a unique name for this form
  fields: ['itemTitle', 'itemDescription', 'itemDuration', 'itemPicture'] // all the fields in your form
})(SellItem);

module.exports = SellItem;
