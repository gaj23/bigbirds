import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';
import images from '../../data/imagesData';
import backup from '../../Assets/no-img.png';

const Details = () => {
  const location = useLocation();
  const { speciesCode, comName, sciName } = location.state
  
  const birdImage = () => {
    if (images[speciesCode] === undefined) {
      return backup
    } else {
      return images[speciesCode]
    }
  }

  const moreInfo = () => {
    let bird;
    if(comName.includes(' ')) {
       bird = comName.split(' ').join('_')
    }
    return `https://www.allaboutbirds.org/guide/${bird}/`
  }

  return (
    <section className='bird-details'>
      <h2>About the {comName}</h2>
      <article>
        <img src={birdImage()} alt={comName}/>
        <h3>{comName}</h3>
        <h4><em>{sciName}</em></h4>
        <a href={moreInfo()} target='_blank' rel='noreferrer'><h5>Learn more here!</h5></a>
      </article>
    </section>
  )
}

export default Details;
