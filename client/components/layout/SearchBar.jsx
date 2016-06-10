import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import $ from 'jquery';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    // UI state 
    this.state = {
      search: ''
    };
  }

  onInputChange(e) {
    this.setState({
      search: e.target.value
    });
  };

  onFormSubmit(e) {
    // e.preventDefault();
    // ###################### SEARCH STRING MUST NOT BE EMPTY OR SEARCH WILL BE WRONG ###################
    if (this.state.search) {
      $.post('/search', { search: this.state.search }, data => {
        this.props.updateSearchResults(data);
      });
      this.setState({ search: '' });
      // this.context.history.pushState(null, '/searchresults');
    }
  }

  render() {
    return (
      <div className='searchbar pure-form'>
        <input type='text' 
               onChange={this.onInputChange.bind(this)} 
               className='search-input pure-input-2-3' 
               value={this.state.search} />
        <button onClick={this.onFormSubmit.bind(this)} className='submit-search pure-button pure-button-primary'>
          <Link to='/searchresults'><img src='http://www.gardenbenches.com/assets/search_mob-4e31f0d049c237cff0aa0f66fc77efc1.png' className='search-icon' /></Link>
        </button>
      </div>
    )
  }
}

var mapDispatchToProps = function(dispatch){
  return {
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
