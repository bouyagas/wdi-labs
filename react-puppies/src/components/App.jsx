// import the libs we need
import React, { Component } from 'react';
import PuppyForm from './PuppyForm/PuppyForm.jsx';
import PuppyList from './PuppyList/PuppyList.jsx';
import './normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {
  constructor() {
    super();

    this.state = {
      puppies: [],
      nameForm: '',
      urlForm: '',
    };
  }

  getAllPuppies() {
    fetch('/api/puppies')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        puppies: data
      });
    })
    .catch(err => console.log(err));
  }

  // After deleting the puppy from our database, rather than going back to our database again to getAllPuppies, we run a filter function to let through all puppies that do not match the id of the puppy we deleted. Then, we reset our puppies state.
  handleAbandonment(id) {
      fetch(`/api/puppies/${id}`, {
        method: 'delete'
      })
      .then(() => {
        const puppies = this.state.puppies.filter((pup) => {
          return pup.id !== id;
        });
        this.setState({ puppies: puppies });
      })
      .catch(err => console.log(err));
    }

  handleLikePuppy(id) {
    console.log('like!')
    fetch(`/api/puppies/like/${id}`, {
      method: 'put'
    })
    .then(() => {
      let puppies = this.state.puppies.map((puppy) => {
        if(puppy.id === id) puppy.likes += 1;
        return puppy;
      })
      this.setState({ puppies: puppies });
    })
    .catch(err => console.log(err));
  }

  updateNameForm(e) {
    this.setState({
      nameForm: e.target.value,
    });
  }

  updateUrlForm(e) {
    this.setState({
      urlForm: e.target.value,
    });
  }

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Welcome to the Fun Puppies API</h1>
          <img src="http://49.media.tumblr.com/tumblr_md12asbGTX1r5c792o5_250.gif" alt="puppy" />
        </header>
        <div id={style['description-body']}>
          <PuppyForm
            name={this.state.nameForm}
            url={this.state.urlForm}
            updateNameForm={event => this.updateNameForm(event)}
            updateUrlForm={event => this.updateUrlForm(event)}
          />
          <PuppyList
            collection={this.state.puppies}
            getAllPuppies={this.getAllPuppies.bind(this)}
            handleAbandonment={this.handleAbandonment.bind(this)}
            handleLikePuppy={this.handleLikePuppy.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
