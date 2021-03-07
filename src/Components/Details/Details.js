import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';
import images from '../../data/imagesData';


const Details = () => {
  const location = useLocation();
  const { speciesCode, comName, sciName } = location.state

  const img = images.find(bird => bird[].includes(speciesCode))
  console.log('our bird', img, speciesCode)
  return (
    <section>
      <p>About the {comName}</p>
    </section>
  )
}

export default Details;
