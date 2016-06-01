import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import SearchResultItemEntry from './SearchResultItemEntry.jsx'

class SearchResults extends Component {
  static defaultProps = {
    results: []
  }

  render() {
    return (
      <div className='search-results'>
        {this.props.results.map(item => <SearchResultItemEntry id={item.id} key={item.id} />)}
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
    // send dispatch to clear out items
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SearchResults);
