import React, { useState, useEffect } from 'react';
import './TopList.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Bird from '../Bird/Bird';

const TopList = () => {
  const topBirds = localStorage.getItem('topBirds');
  const [areaBirds, setAreaBirds] = useState(JSON.parse(topBirds));
  console.log('total birds possible to be seen', areaBirds)

  const stringedSightings = localStorage.getItem('storedSightings')
  const [sightings, setSightings] = useState(JSON.parse(stringedSightings));

  // const [checked, setChecked] = useState(false);
//useEffect, onload, do the following?
  useEffect(() => {
    const checkList = () => {
      console.log('firing?')
      areaBirds.forEach(bird => {
        sightings.forEach(myBird => {
          if(myBird.speciesCode === bird.speciesCode) {
            console.log('blah')
          }
        })
      })
    }
  }, [sightings])
  //every time sightings changes, this event should fire
  //sightings should change with each click
  //if areaBird is in sightings, then checked is true

  const checkList = (event) => {
    if(!sightings.find(bird=> bird.speciesCode === event.target.name)) {
      addToList(event)
    } else {
      removeFromList(event)
    }
  }

  const addToList = (event) => {
    const findBird = areaBirds.find(bird => bird.speciesCode === event.target.name);

    const date = new Date()
    const addSighting = {
      dateSeen: formatDate(date),
      speciesCode: findBird.speciesCode,
      comName: findBird.comName,
      sciName: findBird.sciName
    }

    sightings.push(addSighting)
    localStorage.setItem('storedSightings', JSON.stringify(sightings))
  }

  const removeFromList = (event) => {
    const updatedList = sightings.filter(bird => bird.speciesCode !== event.target.name)

    localStorage.setItem('storedSightings', JSON.stringify(updatedList))
  }

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`
  }

  const possibleBirds = areaBirds.map(bird => {
    return <Bird
        key={bird.speciesCode}
        bird={bird}
        checkList={checkList}
      />
  })

  return (
    <section className='topList'>
      <Header />
        <article>
          <h2>Birds in your Area</h2>
          <table>
            <thead>
              <tr>
                  <th colSpan="2">Seen it? Check it off!</th>
              </tr>
            </thead>
            <tbody>
              {possibleBirds}
            </tbody>
          </table>
        </article>
      <Nav />
    </section>
  )
}

export default TopList;
