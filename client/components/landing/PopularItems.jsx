import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { checkAuthentication } from './../../actions';

import ItemEntry from './../ItemEntry.jsx';

class PopularItems extends React.Component {
  static defaultProps = {
    popularItems: []
  }

  componentDidMount() {
    this.getPopularItems();
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
        <div className='popular'>PoKeMarket Place</div>
        {this.props.popularItems.map(item => { console.log(item, 'from popular item'); return <ItemEntry item={item} key={item.id} />})}
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps) {
  return {
    user: state.user,
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
