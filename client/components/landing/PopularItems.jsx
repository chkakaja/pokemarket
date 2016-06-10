import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import ItemEntry from './../ItemEntry.jsx';

class PopularItems extends React.Component {
  componentDidMount() {
    this.getPopularItems();
  }
  
  static defaultProps = {
    popularItems: []
  }

  getPopularItems() {
    $.ajax({
      method: 'GET',
      url: '/getPopularItems',
      success: function(data) {
        this.props.updatePopularItems(data);
      }.bind(this)
    });
  }

  render() {
    return (
      <div className='popular-items'>
        <div className='popular'>What's popular</div>
        {this.props.popularItems.map(item => { console.log(item, 'from popular item'); return <ItemEntry item={item} key={item.id} />})}
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    popularItems: state.popularItems
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    updatePopularItems: (data) => {
      dispatch({
        type: 'UPDATE_POPULAR_ITEMS',
        data
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularItems);
