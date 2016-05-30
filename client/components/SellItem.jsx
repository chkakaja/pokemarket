import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from '/FacebookButton';
import $ from 'jquery';

class SellItem extends Component {
  constructor(props) {
    super(props);
  }
  
  submitItem() {
    $.post('/sellItem', {  });
  }

  // find way to get duration to be a number
  // when send request, add duration to created at time to get end at time
  // find out way to get pictures
  render () {
    return (
      <div className='sell-item'>
        Selling an item?
        Title: <input type='text' className='item-title' placeholder='What would you like the title to be?' />
        Description: <input type='text' className='item-description' placeholder='How would you describe your item?' />
        Duration (in days): <input type='number' className='item-duration' placeholder='How long would you like your item to be on the market?'>
        Picture: <input type='text' className='item-picture' placeholder='Place a picture URL here'>
        <button className='item-submit' onClick={this.submitItem}>Submit</button>
      </div>
    );
  }
}

ReactDOM.render(
   <SellItem />,
   document.getElementById('app')
);

window.SellItem = SellItem;

// actions below:
// export update (name, value) => {
//   return dispatch => dispatch({
//     type: FORM_UPDATE_VALUE,
//     name,
//     value
//   });
// }

// export reset() => {
//   return dispatch => dispatch({
//     type: FORM_RESET
//   })
// }
