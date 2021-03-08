import React from 'react';
import './Highlight.css';
import images from '../../data/imagesData';

const Highlight = ({ bird }) => {
  const { speciesCode, comName, sciName } = bird

  const birdImage = () => {
    if (images[speciesCode] === undefined) {
      return 'https://www.flaticon.com/svg/vstatic/svg/92/92022.svg?token=exp=1615247580~hmac=52ec88984fb68b2de32a187efbf0ace6'
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
