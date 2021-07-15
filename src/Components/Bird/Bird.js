import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Bird.css';
import arrow from '../../Assets/go-to.png';

const Bird = ( { bird, checkList, checked } ) => {
  const {speciesCode, comName} = bird

  return (
    <tr>
      <td>
        <input
          type='checkbox'
          name={speciesCode}
          defaultChecked={checked}
          onChange={checkList}
        />
        <label htmlFor={speciesCode}>{comName}</label>
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

export default Bird;

Bird.propTypes = {
  bird: PropTypes.shape({
    speciesCode: PropTypes.string.isRequired,
    comName: PropTypes.string.isRequired
  }),
  checkList: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired

}
