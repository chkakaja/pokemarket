
class SearchBar extends React.Component {
  
  constructor(prop){
  	super(prop);
  	this.state = {
  		searchVal = ''
  	};
  }	
  

  render() {

  	return (
  	   <input
  	      value={this.state.searchVal}
  	   	  onChange={this.onSearchChange} /> 
  	   <button onClick= >Search</button>
	) 
  }

  onSearchChange(event){
  	this.setState({searchVal.event.target.value})
  };	
	
}

export default SearchBar;