import React from 'react';
import './PersonalList.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Sighting from '../Sighting/Sighting';

const PersonalList = () => {
  const personalSightings = JSON.parse(localStorage.getItem('storedSightings'));

  const seenBirds = personalSightings.map(bird => {
    return <Sighting
        key={bird.speciesCode}
        bird={bird}
      />
  })

  return (
    <section className='sightingsList'>
      <Header />
      <h2>You've Identified {seenBirds.length} Birds</h2>
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
