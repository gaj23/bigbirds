import React from 'react';
import { Link } from 'react-router-dom';
import './Sighting.css';
import arrow from '../../Assets/go-to.png';

const Sighting = ( { id, comName, date } ) => {
  console.log('id in sighting', id);
  return (
    <tr>
      <td>{ date }</td>
      <td>
        { comName }
        <Link to={`/bird_details/${id}`}>
          <img src={arrow} alt={`go to ${comName} details`} />
        </Link>
      </td>
    </tr>
  )
}

//add link here to go to details about a bird.

export default Sighting;
