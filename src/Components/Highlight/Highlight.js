import React from 'react';
import './Highlight.css';
import images from '../../data/imagesData';

const Highlight = () => {
  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  }

  const birdID = Object.keys(images)
  const randomBird = birdID[getRandomIndex(birdID)]

  const birdImage = () => {
    return images[randomBird]
  }

  return (
    <section className='highlight'>
      <h2>Guess this Bird!</h2>
        <article>
          <img src={birdImage()} alt='guess this bird'/>
        </article>
    </section>
  )
}

export default Highlight;
