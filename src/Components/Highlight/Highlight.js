import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Highlight.css';
import apiCalls from '../../apiCalls';
import images from '../../data/imagesData';
import Loading from '../Loading/Loading';

const Highlight = () => {
  const [bird, setBird] = useState(null);
  const [highlightImg, setHighlightImg] = useState('')


  useEffect(() => {
    const areaBirds = JSON.parse(localStorage.getItem('topBirds'));
    const sightings = JSON.parse(localStorage.getItem('storedSightings'));

    const getRandomIndex = (array) => {
      return Math.floor(Math.random() * array.length);
    }
    const birdID = Object.keys(images)
    const randomBird = birdID[getRandomIndex(birdID)]
    const birdImage = () => {
      return images[randomBird]
    }

    const findBird = () => {
      if (areaBirds.find(bird => bird.speciesCode === bird)) {
         setBird(areaBirds.find(bird => bird.speciesCode === randomBird));
         setHighlightImg(birdImage());
      } else if (sightings.find(bird => bird.speciesCode === randomBird)) {
        setBird(sightings.find(bird => bird.speciesCode === randomBird));
        setHighlightImg(birdImage());
      } else {
        apiCalls.getSingleBird(randomBird)
          .then(data => setBird(data[0]))
        setHighlightImg(birdImage())
      }
    }
    findBird();
  }, [])

  return (
    <section className='highlight'>
      {!bird && <Loading />}
      {bird &&
        <>
          <h2>Guess this Bird!</h2>
          <article>
            <Link to={
              {
                pathname: `/bird_details/${bird.speciesCode}`,
                state: bird
              }
            } >
              <img src={highlightImg} alt='guess this bird'/>
            </Link>
          </article>
        </>
      }
    </section>
  )
}

export default Highlight;
