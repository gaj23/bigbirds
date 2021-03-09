import React from 'react';
import { Link } from 'react-router-dom';
import './Highlight.css';
import images from '../../data/imagesData';

const Highlight = () => {
  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  }

  const birdID = Object.keys(images)
  const randomBird = birdID[getRandomIndex(birdID)]
  //randomBird => speciesCode

  const birdImage = () => {
    return images[randomBird]
  }

  return (
    <section className='highlight'>
      <h2>Guess this Bird!</h2>
        <article>

            <img src={birdImage()} />

        </article>
    </section>
  )
}

export default Highlight;
