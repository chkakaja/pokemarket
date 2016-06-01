import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class SearchBar extends React.Component {

  static defaultProps = {
    search: ''
  }

  onInputChange(e) {
    this.search = e.target.value;
  };

  onFormSubmit(e) {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: '/search',
      data: { search: this.search },
      dataType: 'json',
      success: function(data) {
        console.log('data', data);
        this.props.updateSearchResults(data);
      }.bind(this)
    })
    document.getElementsByClassName('search-input')[0].value = '';
  }


  render() {
    return (
       <form>
         <input type="text" onChange={this.onInputChange.bind(this)} className='search-input' />
            <span>
              <button onClick={this.onFormSubmit.bind(this)} type="submit">Search</button>
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
        type: 'UPDATE_SEARCH_RESULTS',
        results
      })
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SearchBar);
