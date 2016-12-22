import React, { Component } from 'react';
// import PuppyList from '../PuppyList/PuppyList.jsx';
import './PuppyListItem.css';

const PuppyListItem = props => (
  <div className="puppy-list-item">
    <h4>{props.name}</h4>
    <div id="puppy-image">
      <img src={props.url} alt={props.name}/>
    </div>
    <p>Likes: {props.likes}</p>
    <button onClick={() => props.handleLikePuppy(props.id)}>Like! 😍 </button>
    <button onClick={() => props.handleAbandonment(props.id)}> Abandon 😥 </button>
  </div>
);

export default PuppyListItem;
