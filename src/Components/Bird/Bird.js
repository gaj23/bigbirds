import React from 'react';
import { Link } from 'react-router-dom';
import './Bird.css';
import arrow from '../../Assets/go-to.png';

const Bird = ( { bird, checkBox, updateList } ) => {
  const {speciesCode, comName} = bird

  return (
    <tr>
      <td>
        <input
          type='checkbox'
          name={speciesCode}
          defaultChecked={checkBox}
          onChange={updateList}
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

//add link here to go to details about a bird.

export default Bird;
