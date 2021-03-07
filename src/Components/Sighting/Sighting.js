import React from 'react';
import { Link } from 'react-router-dom';
import './Sighting.css';
import arrow from '../../Assets/go-to.png';

const Sighting = ( { bird } ) => {
  const { speciesCode, comName, dateSeen } = bird
  return (
    <tr>
      <td>
        { comName }
        <Link to={
          {
            pathname: `/bird_details/${speciesCode}`,
            state: bird
          }
        } >
          <img src={arrow} alt={`go to ${comName} details`} />
        </Link>
      </td>
    </tr>
  )
}

//add link here to go to details about a bird.

export default Sighting;
