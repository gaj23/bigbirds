import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Sighting.css';
import arrow from '../../Assets/go-to.png';

const Sighting = ( { bird } ) => {
  const { speciesCode, comName, dateSeen } = bird

  return (
    <tr>
      <td>
        { comName } {dateSeen}
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

export default Sighting;

Sighting.propTypes = {
  bird: PropTypes.shape({
    speciesCode: PropTypes.string.isRequired,
    comName: PropTypes.string.isRequired,
    dateSeen: PropTypes.string.isRequired
  })
}
