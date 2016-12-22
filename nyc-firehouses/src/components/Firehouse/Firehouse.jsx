// require the react module
import React from 'react';
// require the css file for Firehouse
import './Firehouse.css';

// This is a stateless function so we do not need all that extra react component stuff

// props are passed as an argurement from the parent function, which in this case is FirehouseDisplay
const Firehouse = (props) => {
  return (
    <span>
      {/* FacilityName is a key within the json data*/}
      <h4>{props.house.FacilityName}</h4>
    {/* FacilityAddress and Borough are also keys within the json data*/}
      <address>{props.house.FacilityAddress}, {props.house.Borough}</address>
    </span>
  );
}

// export Firehouse so it can be used in FirehouseDisplay
export default Firehouse;
