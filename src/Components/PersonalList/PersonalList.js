import React from 'react';
import './PersonalList.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import sightings from '../../data/sightingsData';
import Sighting from '../Sighting/Sighting';

const PersonalList = () => {
  
  const seenBirds = sightings.map(bird => {
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
