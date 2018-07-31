// React will be the local name for the library 'react' in the node_modules
// The 'react' library is for creating and managing components, 
// 'react-dom' for DOM interactions
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This should produce some HTML
// "const" is ES6 for declaring constants, "() =>" is equivalent to function()
// This creates a component class - which we can then create instances of
const App = () => {
  // This is JSX - it looks like HTML but it's actually JS
  // This also can't be understood by a browser and must be rendered by webpack
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
// We can only render instances, not classes
// <App></App> (or </App /> for short) instantiates the App class above
// Second argument is the container - where the element should be rendered
// In this case index.html already has a div class container, so use that
ReactDOM.render(<App />, document.querySelector('.container'));