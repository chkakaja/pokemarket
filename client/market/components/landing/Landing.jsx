import React, { PropTypes } from 'react';
import PopularItems from './PopularItems.jsx';

export default class Landing extends React.Component {
  render () {
    return (
      <div className='landing'>
        <PopularItems />
      </div>
    );
  }
};