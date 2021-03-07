import React from 'react';
import { Link } from 'react-router-dom';
import './Sighting.css';
import arrow from '../../Assets/go-to.png';

const Sighting = ( { bird } ) => {
  const { speciesCode, comName, dateSeen } = bird

  console.log(bird.speciesCode)
  //expecting an object
  return (
    <tr>
      <td>{ dateSeen }</td>
      <td>
        { comName }
        <Link to={`/bird_details/${speciesCode}`} >
          <img src={arrow} alt={`go to ${comName} details`} />
        </Link>
      </td>
    </tr>
  )
}

//add link here to go to details about a bird.

export default Sighting;
