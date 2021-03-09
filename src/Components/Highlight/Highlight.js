import React from 'react';
import './Highlight.css';
import images from '../../data/imagesData';
import backup from '../../Assets/no-img.png';

const Highlight = ({ bird }) => {
  const { speciesCode, comName, sciName } = bird

  const birdImage = () => {
    if (!images[speciesCode]) {
      return backup
    } else {
      return images[speciesCode]
    }
  }

  const moreInfo = () => {
    let birdName;
    if(comName.includes(' ')) {
       birdName = comName.split(' ').join('_')
    }
    return `https://www.allaboutbirds.org/guide/${birdName}/`
  }

  return (
    <section className='highlight'>
      <h2>Spot that Bird!</h2>
        <article>
          <img src={birdImage()} alt={comName}/>
          <h3>{comName}</h3>
          <h4><em>{sciName}</em></h4>
          <a href={moreInfo()} target='_blank' rel='noreferrer'><h5>Learn more here!</h5></a>
        </article>
    </section>
  )
}

export default Highlight;
