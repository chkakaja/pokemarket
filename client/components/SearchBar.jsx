import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class SearchBar extends React.Component {
  
  constructor(prop){
  	super(prop);
  	this.state = {
  		term: ''
    };
  	this.onInputChange = this.onInputChange.bind(this);
  }	
  
  onInputChange(e){
  	this.setState({term: e.target.value})
  };

  onFormSubmit(){
    event.preventDefault();
  }


  render() {
    return (
       <form>
         <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange} /> 
            <span>
              <button onClick={this.onFormSubmit} type="submit" >Search</button>
            </span>
       </form>
    ) 
  }

}


function mapDispatchToProps(dispatch) {
  return 
}




export default connect  (null, mapDispatchToProps)(SearchBar);