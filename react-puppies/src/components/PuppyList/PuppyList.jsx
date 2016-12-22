import React, { Component } from 'react';
import PuppyListItem from '../PuppyListItem/PuppyListItem.jsx';
import './PuppyList.css';

class PuppyList extends Component {

 renderAllPuppies() {
    return this.props.collection.map((pup, i) =>
      <PuppyListItem
         handleLikePuppy={this.props.handleLikePuppy}
         handleAbandonment={this.props.handleAbandonment}
         likes={pup.likes}
         name={pup.name}
         url={pup.url}
         key={i}
         id={pup.id}
      />
    );
  }

  componentWillMount() {
    this.props.getAllPuppies();
  }

  render() {
    console.log(this.props);
    return (
      <div className="puppy-list-container">
        {this.renderAllPuppies()}
      </div>
    )
  }
}

export default PuppyList;
