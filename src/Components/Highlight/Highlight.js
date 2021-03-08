import React from 'react';
import './Highlight.css';


const Highlight = () => {
  const birdOfTheDay = {
    speciesCode: 'brncre',
    comName: 'Brown Creeper',
    sciName: 'Certhia americana',
    url: 'https://www.allaboutbirds.org/guide/assets/photo/68037181-1280px.jpg'
  }
  //compare sightings list with top 30 list & filter is !dateSeen
  //randomize !seen birds
  //will need to account to ! url (see details for logic)
  //or completely refactor this -> get it working first and then refactor.

  const moreInfo = () => {
    let bird;
    if(birdOfTheDay.comName.includes(' ')) {
       bird = birdOfTheDay.comName.split(' ').join('_')
    }
    return `https://www.allaboutbirds.org/guide/${bird}/`
  }

  return (
    <section className='highlight'>
      <h2>Spot that Bird!</h2>
        <article>
          <img src={birdOfTheDay.url} alt={birdOfTheDay.comName}/>
          <h3>{birdOfTheDay.comName}</h3>
          <h4><em>{birdOfTheDay.sciName}</em></h4>
          <a href={moreInfo()} target='_blank' rel='noreferrer'><h5>Learn more here!</h5></a>
        </article>
    </section>
  )
}

export default Highlight;
