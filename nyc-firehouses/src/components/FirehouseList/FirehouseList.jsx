// require the react module here as well as the component class from the module
import React, { Component } from 'react';
// require Firehouse component
import Firehouse from '../Firehouse/Firehouse.jsx';
// require css file for FirehouseList
import './FirehouseList.css';

// define and export a class called FirehouseList and inherit Component's methods and functions
// This will be used in App.js
export default class FirehouseList extends Component {

  // This function takes a parameter of an array (collection is an array of json objects)
  showHouses(collection) {
    // map method creates a new array with the result of this anonymous function
    return collection.map((house, index) => {
      // each item will have a key, a class, and an onClick function
      // the onClick function changeSelection is passed as a prop from App.js
      // the parameter index points to the specific house's data within the json object
      <article key={index} className='firehouse-item' onClick={() => this.props.changeSelection(index)}>
        {/* use the Firehouse component as pass on the specific information for each house */}
        <Firehouse house={house} />
      </article>
    });
  }

render() {
    return (
      <div className="list-container">
        { /* render a lit of house based on our props.collection which was passed as a prop from App.js*/ }
        {this.showHouses(this.props.collection)}

      </div>
    )
  }
}



// export default class FirehouseList extends Component {
//   render() {
//   const allHouses = this.props.collection.map((house, i) => {
//     return (
//       <Firehouse
//         key={i}
//         house={house}
//       />
//     );
//   })
//     return (
//       <div className="list-container">
//         {allHouses}
//       </div>
//     )
//   }
// }
