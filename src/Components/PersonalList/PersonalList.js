import React from 'react';
import './PersonalList.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Sighting from '../Sighting/Sighting';

const PersonalList = () => {
  //get items from local storage and use *that* instead of calling on local data
  //refactor this into JSON update file only
  let personalSightings = localStorage.getItem('storedSightings');
  personalSightings = JSON.parse(personalSightings);

  //only 'gets' and doesn't update.

  const seenBirds = personalSightings.map(bird => {
    return <Sighting
        key={bird.speciesCode}
        bird={bird}
      />
  })

  return (
    <section className='sightingsList'>
      <Header />
      <h2>Birds you've Identified</h2>
      <table>
        <tbody>
          {seenBirds}
        </tbody>
      </table>
      <Nav />
    </section>
  )
}

export default PersonalList;
