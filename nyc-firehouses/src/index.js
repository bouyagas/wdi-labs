// require the react module here as well as the component class from the module
import React from 'react';
// require the virtual dom from react-dom
import ReactDOM from 'react-dom';
// require the App component
import App from './components/App';

ReactDOM.render(
  <App />,
  {/* get the element #root from index.html and render App in there */}
  document.querySelector('#root')
);
