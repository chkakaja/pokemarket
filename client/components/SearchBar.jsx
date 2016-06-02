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
       <form>
         <input type='text' onChange={e => this.onInputChange(e)} className='search-input' />
            <span>
              <button onClick={this.onFormSubmit.bind(this)} type='submit' className='submit-search'><Link to='/searchresults'>Search</Link></button>
            </span>
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
