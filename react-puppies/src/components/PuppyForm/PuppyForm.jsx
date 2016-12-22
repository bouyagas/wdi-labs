import React, { Component } from 'react';
import './PuppyForm.css';

class PuppyForm extends Component {

  render() {
    console.log(this.props)
    return (
      <div id="puppy-form-container">
        <input
          type="text"
          placeholder="Eneter your pup's name"
          value={this.props.name}
          onChange={this.props.updateNameForm}
        />
        <input
          type="text"
          placeholder="Silly gif url"
          value={this.props.url}
          onChange={this.props.updateUrlForm}
        />
        <button>Adopt!</button>
      </div>
    )
  }
}

export default PuppyForm;
