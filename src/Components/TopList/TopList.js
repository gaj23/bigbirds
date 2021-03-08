import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './TopList.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Bird from '../Bird/Bird';
import Loading from '../Loading/Loading';

const TopList = () => {
  const topBirds = localStorage.getItem('topBirds')
  const areaBirds = JSON.parse(topBirds)

  const checkList = () => {
    const stringedSightings = localStorage.getItem('storedSightings')
    let sightings = JSON.parse(stringedSightings);

    // if areaBirds includes seenBirds, then checked = true

    areaBirds.forEach(bird => {
      sightings.find(seenBird => {

      })
    })
  }

  const updateList = (event) => {
    if (event.target.checked){
      addToList(event)
    } else if (!event.target.checked) {
      removeFromList(event)
    }
  }
  const addToList = (event) => {
    const stringedSightings = localStorage.getItem('storedSightings')
    let sightings = JSON.parse(stringedSightings);
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
    const stringedSightings = localStorage.getItem('storedSightings')
    let sightings = JSON.parse(stringedSightings);
    //refactor above into own json helper function
    console.log('before', sightings)
    sightings = sightings.filter(bird => bird.speciesCode !== event.target.name)
    console.log('after', sightings)
    localStorage.setItem('storedSightings', JSON.stringify(sightings))
  }

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`
  }

  //date needs formatted

  //if inside of sightings, needs to already been set to true

  const possibleBirds = areaBirds.map(bird => {
    return <Bird
        key={bird.speciesCode}
        bird={bird}
        updateList={updateList}
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
