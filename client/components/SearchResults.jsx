import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ItemEntry from './ItemEntry.jsx'

class SearchResults extends Component {
  static defaultProps = {
    results: []
  }

  render() {
    console.log('#########', this.props.results);
    return (
      <div className='search-results'>
        {this.props.results.map(item => <ItemEntry item={item} key={item.id} />)}
      </div>
    );
  }
  
}

var mapStateToProps = function(state, ownProps) {
  return {
    results: state.filteredItems
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SearchResults);
