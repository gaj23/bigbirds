import React from 'react';
import './Bird';

const Bird = ( { id, comName } ) => {
  return (
    <tr>
      <td><input type='checkbox' /></td>
      <td>{comName}</td>
    </tr>
  )
}

export default Bird;
