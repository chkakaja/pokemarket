import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import $ from 'jquery';
import { checkAuthentication } from '../actions.js';

class SearchBar extends React.Component {

  static defaultProps = {
    search: ''
  }

  onInputChange(e) {
    this.search = e.target.value;
  };

  onFormSubmit(e) {
    e.preventDefault();

    // ###################### SEARCH STRING MUST NOT BE EMPTY OR SEARCH WILL BE WRONG ###################
    if (this.search) {
      $.post('/search', { search: this.search }, data => {
        this.props.updateSearchResults(data);
        this.search = '';
      });
      document.getElementsByClassName('search-input')[0].value = '';
    }
  }


  render() {
    return (
      <form className='searchbar pure-form'>
        <input type='text' onChange={this.onInputChange.bind(this)} className='search-input pure-input-2-3' />
        <button onClick={this.onFormSubmit.bind(this)} type='submit' className='submit-search pure-button pure-button-primary'><Link to='/searchresults'><img src='http://www.clker.com/cliparts/9/T/2/h/X/7/search-icon-hi.png' className='search-icon' /></Link></button>
      </form>
    ) 
  }

}


var mapStateToProps = function(state, ownProps) {
  return {
  }
};

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

module.exports = connect(mapStateToProps, mapDispatchToProps)(SearchBar);
