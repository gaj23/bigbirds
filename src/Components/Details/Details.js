import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';
import images from '../../data/imagesData';
import backup from '../../Assets/no-img.png';

const Details = () => {
  const location = useLocation();
  const { speciesCode, comName, sciName } = location.state

  const [url, setURL] = useState(null);
  const [img, setImg] = useState(null);

  useEffect(() => {
    const moreInfo = () => {
      let bird;
      if(comName.includes(' ')) {
        bird = comName.split(' ').join('_')
      }
      setURL(`https://www.allaboutbirds.org/guide/${bird}/`)
    }

    const birdImage = () => {
      if (images[speciesCode] === undefined) {
        setImg(backup)
      } else {
        setImg(images[speciesCode])
      }
    }

    birdImage()
    moreInfo()
  })

  return (
    <section className='bird-details'>
      <h2>About the {comName}</h2>
      <article>
        <img src={img} alt={comName}/>
        <h3>{comName}</h3>
        <h4><em>{sciName}</em></h4>
        <a href={url} target='_blank' rel='noreferrer'><h5>Learn more here!</h5></a>
      </article>
    </section>
  )
}

export default Details;
