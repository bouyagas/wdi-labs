import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {

  render() {
    return (
      <div className="ball-holder">
        <img
          src={this.props.url} alt=""
          onClick={this.props.selectRandomBall}
        />
      </div>
    )
  }
}

export default Ball;
