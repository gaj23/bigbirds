import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';
import images from '../../data/imagesData';


const Details = () => {
  const location = useLocation();
  const { speciesCode, comName, sciName } = location.state

  let birdImage = images[speciesCode]
  if (birdImage === undefined) {
    birdImage = 'https://lh3.googleusercontent.com/proxy/2Glg8bEJYDUFmlsYVPtSYSsemOIYKVw7MRlLdEH6ryZUSThHwLfW0PSRbsGVJ640j0xB2MREMrtA6LxHwHjtE8UTEBbhIJ4'
  }

  return (
    <section>
      <p>About the {comName}</p>
      <img src={birdImage} alt={comName} />
    </section>
  )
}

export default Details;
