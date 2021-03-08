import React from 'react';
import { Link } from 'react-router-dom';
import './Bird.css';
import arrow from '../../Assets/go-to.png';

const Bird = ( { bird, checkList } ) => {
  const {speciesCode, comName} = bird

  return (
    <tr>
      <td>
        <input
          type='checkbox'
          name={speciesCode}
          onClick={checkList}
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
