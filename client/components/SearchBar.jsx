import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory, History } from 'react-router'
import $ from 'jquery';
import { checkAuthentication } from '../actions.js';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    // UI state 
    this.state = {
      search: ''
    };
  }

  static contextTypes= {
    history: React.PropTypes.object
  }

  onInputChange(e) {
    this.setState({
      search: e.target.value
    });
  };

  onFormSubmit(e) {
    e.preventDefault();
    // ###################### SEARCH STRING MUST NOT BE EMPTY OR SEARCH WILL BE WRONG ###################
    if (this.state.search) {
      $.post('/search', { search: this.state.search }, data => {
        this.props.updateSearchResults(data);
      });
      this.setState({ search: '' });
      this.context.history.pushState(null, '/searchresults');
    }
  }

  render() {
    return (
      <form className='searchbar pure-form'>
        <input type='text' 
               onChange={this.onInputChange.bind(this)} 
               className='search-input pure-input-2-3' 
               value={this.state.search} />
      </form>
    )
  }

}

var mapDispatchToProps = function(dispatch){
  return {
    // use this information to populate search results page
    updateSearchResults: (results) => {
      dispatch({
        type: 'CLEAR_SEARCH_RESULTS'
      })
      dispatch({
        type: 'UPDATE_SEARCH_RESULTS',
        results
      })
    }
  }
};

module.exports = connect(null, mapDispatchToProps)(SearchBar);
