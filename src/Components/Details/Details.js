import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';


const Details = () => {
  const location = useLocation();
  const { speciesCode, comName, sciName } = location.state
  return (
    <section>
      <p>About the {comName}</p>
    </section>
  )
}

export default Details;
