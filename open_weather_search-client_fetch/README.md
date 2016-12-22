# GA Open Weather Search
Yet again another weather searching application!

## Introduction
Going forward we are ditching server side rendering and we are going to be doing
client side rendering. This means that we will be treating our backends as our
very own API and using an `XHR` (see fetch) request on our client to request
data.

## Setup
The backend of the application is provided as a fully functional API made with
Express. The scaffolding for the front end of the application has also been
provided in the [public](./public) directory.

To get started,

1. install all of the project's dependencies
  
  ```
  npm install
  ```
2. Create a file called `.env` and store your Open Weather API key
  
  ```
  WEATHER_API_KEY=###################################
  ```

## Usage
- API endpoint `localhost:3000/api/`
- Query parameter(s)
  * cityName - takes the name of the city you are searching for
- Returned data: returns weather forecast for the next 48hrs
