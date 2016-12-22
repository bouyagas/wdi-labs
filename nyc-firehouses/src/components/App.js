// require the react module here as well as the component class from the module
import React, { Component } from 'react';
// require json data
import firehouses from '../data/firehouses.json';
// require FirehouseDisplay component
import FirehouseDisplay from './FirehouseDisplay/FirehouseDisplay.jsx';
// require FirehouseList component
import FirehouseList from './FirehouseList/FirehouseList.jsx';
// require the css file associated with this js file
import './App.css';

// define class called App and inherit Component's methods and functions
class App extends Component {
  // build a constructor to hold our state

  constructor(props) {
    super();
    // houseList holds our json data
    // selected holds the first item in our json data
    this.state = {
      houseList: firehouses,
      selected: firehouses[0],
    };
  }

  // Mutator function to change our selected house
  // Takes in a parameter num which will point to a specific item in our json data collection and reset the state of selected
  changeSelection(num) {
    this.setState({
      selected: this.state.houseList[num],
    });
  }

 // render is a method of the class Component which returns a single child component (or null or false)
  render() {
    // the render method will return a single React element, in this case a div
    return (
      <div>
        <header>
          <h1>NYC Firehouses</h1>
          <nav>nav nav nav</nav>
        </header>
        <main>
          {/* use the FirehouseDisplay compenent and pass state of "selected" which will be called as props within the FirehouseDisplay component*/}
          <FirehouseDisplay house={this.state.selected} />
          {/* use the FirehouseList component and pass the state of "houselist" which will be called as props within the FirehouseList component*/}
          {/* also pass on the changeSelection function. This function must be bound so that when the FirehouseList component calls this function it will use the App's state and not the FirehouseList state (which does not exist)*/}
          <FirehouseList
            collection={this.state.houseList}
            changeSelection={this.changeSelection.bind(this)}
          />
        </main>
        <footer>
          <a href="/">Home</a>
          <p>This data is prodvided by New York City Open Data</p>
        </footer>
      </div>
    );
  }
}
// export the class App so it can be used in the index.js
export default App;
