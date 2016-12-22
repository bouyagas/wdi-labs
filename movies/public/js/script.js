'use strict';

(() => {
  console.log('js connected');

  const movieButton = document.querySelector('#movies');
  const movieContainer = document.querySelector('#movie-container');


  function renderMovies(movieData) {
    // code help on how to remove all child nodes from div element from http://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
    while (movieContainer.hasChildNodes()) {
      movieContainer.removeChild(movieContainer.lastChild);
    }

    for (let i = 0; i < movieData.length; i++) {
      let listItem = document.createElement('div');
      let movieTitle = document.createElement('h2');
      movieTitle.textContent = movieData[i].title;
      listItem.appendChild(movieTitle);
      let movieDate = document.createElement('p');
      movieDate.textContent = `Release Date: ${movieData[i].release_date}`;
      listItem.appendChild(movieDate);
      let movieImg = document.createElement('a');
      movieImg.setAttribute('href', movieData[i].imdb_url);
      movieImg.textContent = 'More info...'
      listItem.appendChild(movieImg);
      movieContainer.appendChild(listItem);
    }
  }

  function fetchMovies() {
    fetch('/api/movies')
    .then(r => r.json())
    .then(data => {
      renderMovies(data);
    });
  }

  movieButton.addEventListener('click', (event) => {
    console.log('clicked!')
    fetchMovies();
  })

})();
