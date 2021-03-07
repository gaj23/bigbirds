import React from 'react';
import { Link } from 'react-router-dom';
import './Bird.css';
import arrow from '../../Assets/go-to.png';

const Bird = ( { id, comName } ) => {
  return (
    <tr>
      <td>
        <input type='checkbox' name={id}/>
        <label htmlFor={id}>{comName}</label>
        <Link to='/bird-details/{id}'>
          <img src={arrow} alt='go to {comName} details' />
        </Link>
      </td>
    </tr>
  )
}

//add link here to go to details about a bird.

export default Bird;
