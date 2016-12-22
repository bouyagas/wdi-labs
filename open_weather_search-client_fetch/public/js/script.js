'use strict';

(() => {
  // Create variables for the button and input box to be referenced later
  const button = document.querySelector('button');
  const input = document.querySelector('input');
  const ctx = document.querySelector('#weather-graph').getContext('2d');

  function renderGraph(chart, weatherData) {
    const times = weatherData.list.map(x => x.dt_txt);
    const temps = weatherData.list.map(x => x.main.temp);
    const data = {
      labels: times,
      datasets: [{
        label:'Temperature',
        fill: false,
        borderColor: '#539ee8',
        data: temps
      }]
    };
    const options = {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Temperature (°F)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time'
          }
        }]
      }
    }

    // Below, it is really data: data and options: options, but in ES6 we don't need to do that.
    const myWeatherChart = new Chart(chart, {
      type: 'line',
      data,
      options
    })
  }

  function searchCity(city) {
    fetch(`/api?cityName=${city}`)
    .then(r => r.json())
    .then(data => renderGraph(ctx, data))
    .catch(err => console.log(err));
  }

  // Create an event listener for clicking the button that makes a fetch and then
  // renders the data to a graph using Chart.js
  button.addEventListener('click', (event) => {
    searchCity(input.value);
  });

  // Create an event listener for the input box that listens for a keypress
  // so we can search on the enter key as well as clicking the button
  input.addEventListener('keypress', (event) => {
    if (event.which === 13 || event.keyCode === 13) {
      searchCity(input.value);
    }
  })

})();
