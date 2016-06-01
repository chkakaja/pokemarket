import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ItemEntry from './ItemEntry.jsx'

class SearchResults extends Component {
  static defaultProps = {
    results: []
  }

  render() {
    return (
      <div className='search-results'>
        {this.props.results.map(item => <ItemEntry id={item.id} key={item.id} />)}
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
