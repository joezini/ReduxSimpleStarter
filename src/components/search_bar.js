// Need this import in any file that will use JSX, since it is transpiled into
// `React.createElement`, so React needs to be in scope
// The `{ Component }` is syntactic sugar for adding a line
// `const Component = React.Component`
// so we can refer to it without the qualifier later
import React, { Component } from 'react';

class SearchBar extends Component {
  // if this function exists it is called automatically 
  // when a new instance is created
  constructor(props) {
    // this calls the constructor method of the parent Component class
    super(props);
    // initialise the state with a property for the search term
    this.state = { term: 'Starting Value' };
  }
  
  // classes extending React.Component must define a render method that
  // returns some JSX
  render() {
    // all HTML elements can emit a "change" event when interacted with
    // the onChange property watches for that event on that element 
    // and calls the supplied event handler when it happens
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>  
    );
  }

  // event handler
  onInputChange(event) {
    console.log(event.target.value);
  }

}

// This specifies that any other file which imports from 'search_bar' will get
// SearchBar (this lets us restrict what is usable from other components if there
// is other stuff in here that we don't want them to use)
export default SearchBar;