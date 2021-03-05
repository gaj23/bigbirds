import React from 'react';
import './Highlight.css';


const Highlight = () => {
  const birdOfTheDay = {
    speciesCode: 'brncre',
    comName: 'Brown Creeper',
    sciName: 'Certhia americana',
    url: 'https://www.allaboutbirds.org/guide/assets/photo/68037181-1280px.jpg'
  }
  //pass down a randomly chosen bird from the top 100 list compared to what exists on the personallist
  //create a object that has both gathered data and person data of being true or false
  //map over data to add property
  //url is not included, that will need to be data I compile myself.

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
      {/* What do I want to be rendered here compared to what will be rendered in Details? */}
    </section>
  )
}

export default Highlight;
