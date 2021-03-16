import React from 'react';
import './Highlight.css';
import images from '../../data/imagesData';

const Highlight = () => {
  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  }

  //images = an object [speciesCode]: imgUrl

  const birdID = Object.keys(images)
  const randomBird = birdID[getRandomIndex(birdID)]
  //randomBird = speciesCode

  //look through localStorage for speciesCode
  //and wrap img in Link to =/bird_details/${randomBird}


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
