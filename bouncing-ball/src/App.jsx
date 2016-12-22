import React, { Component } from 'react';
import Ball from './components/ball/Ball';
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedIndex: 0,
      // selectedIndexTwo: 0,
      // selectedIndexThree: 0,
      // selectedIndexFour: 0,
      // selectedIndexFive: 0,
      balls: [
        {
          url: 'http://clipartix.com/wp-content/uploads/2016/04/Beach-ball-clipart.png'
        },
        {
          url: 'http://vignette1.wikia.nocookie.net/warehouse13/images/9/9d/Baylor_Dodgeball_(Cut).png/revision/latest?cb=20130920183546'
        },
        {
          url: 'http://img02.deviantart.net/7e5c/i/2013/033/f/4/png_magic_ball__2__by_moonglowlilly-d5tk6bt.png'
        },
        {
          url: 'http://www.freeiconspng.com/uploads/soccer-ball-png-1.png'
        },
        {
          url: 'http://www.pngall.com/wp-content/uploads/2016/03/Tennis-Ball-Free-Download-PNG.png'
        },
        {
          url: 'http://img2.wikia.nocookie.net/__cb20130425221226/kirby/en/images/d/dc/KA_Ball.png'
        },
        {
          url: 'http://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Music-PNG/Blue_Disco_Ball_Transparent_PNG_Clip_Art_Image.png?m=1450127677'
        },
        {
          url: 'http://icons.iconarchive.com/icons/icons-land/sport/256/Football-Ball-icon.png'
        },
        {
          url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsgbi-9osN_Ci1h5w1TKRFJZ43AfOtayL0uESBF0_dFVmWHrPQ6g'
        },
        {
          url: 'http://img11.deviantart.net/7eb5/i/2012/028/7/2/eye_ball_png_by_doloresdevelde-d4nwchh.png'
        }
      ]
    };
  }

  componentWillMount() {
    // this.selectRandomBall();
    // this.magicBalls();
    this.startInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalRef)
  }

  startInterval() {
    const ref = setInterval(() => {
      this.selectRandomBall();
    }, 1500);

    this.setState({
      inertvalRef: ref
    });

  }

  selectRandomBall() {
    console.log('It\'s magic!')
    this.setState({
      selectedIndex: Math.floor(Math.random() * this.state.balls.length ),
      // selectedIndexTwo: Math.floor(Math.random() * this.state.balls.length ),
      // selectedIndexThree: Math.floor(Math.random() * this.state.balls.length ),
      // selectedIndexFour: Math.floor(Math.random() * this.state.balls.length ),
      // selectedIndexFive: Math.floor(Math.random() * this.state.balls.length ),
    })
  }

  // magicBalls() {
  //   setInterval(this.selectRandomBall.bind(this), 1500);
  // }


  render() {
    return(
      <div>
        <Ball
          url={this.state.balls[this.state.selectedIndex].url}
          selectRandomBall={() => this.selectRandomBall()}
        />
        <Ball
          url={this.state.balls[this.state.selectedIndex].url}
          selectRandomBall={this.selectRandomBall.bind(this)}
        />
        <Ball
          url={this.state.balls[this.state.selectedIndex].url}
          selectRandomBall={() => this.selectRandomBall()}
        />
        <Ball
          url={this.state.balls[this.state.selectedIndex].url}
          selectRandomBall={() => this.selectRandomBall()}
        />
        <Ball
          url={this.state.balls[this.state.selectedIndex].url}
          selectRandomBall={() => this.selectRandomBall()}
        />
      </div>
    );
  }
}

export default App;
