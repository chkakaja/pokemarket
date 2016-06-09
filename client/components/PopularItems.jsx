import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import { checkAuthentication } from './../actions';
import ItemEntry from './ItemEntry.jsx';

class PopularItems extends Component {
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
      <div>
        <div className='popular'>What's popular</div>
        {this.props.popularItems.map(item => <ItemEntry item={item} key={item.id} />)}
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
