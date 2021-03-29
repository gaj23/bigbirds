import React from 'react';
import './PersonalList.css';
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
      <h2>You've Identified {seenBirds.length} Birds</h2>
      <table>
        <tbody>
          {seenBirds}
        </tbody>
      </table>
    </section>
  )
}

export default PersonalList;
