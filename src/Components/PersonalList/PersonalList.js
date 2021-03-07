import React from 'react';
import './PersonalList.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import sightings from '../../data/sightingsData';
import Sighting from '../Sighting/Sighting';

const PersonalList = () => {
  console.log(new Date());
  //match sighting data to new date data
  console.log(sightings);

  const seenBirds = sightings.map(bird => {
    return <Sighting
        key={bird.speciesCode}
        id={bird.speciesCode}
        comName={bird.comName}
        date={bird.dateSeen}
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
