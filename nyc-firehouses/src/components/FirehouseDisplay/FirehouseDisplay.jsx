// require react and component from react module
import React, { Component } from 'react';
// require Firehouse component
import Firehouse from '../Firehouse/Firehouse';
// require css file for FirehouseDisplay
import './FirehouseDisplay.css';

// define and export a class called FirehouseDisplay and inherit Component's methods and functions
// This will be used in App.js
export default class FirehouseDisplay extends Component {
  render() {
    return (
      <article className="show-container">
        {/* use the Firehouse component*/}
        {/* this.props.house is the props passed down from App.js referring to the "selected" state (specific fire house) */}
        <Firehouse house={this.props.house} />
        }
      </article>
    )
  }
}
