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

  const updateList = (event) => {
    checkBox();
    const stringedSightings = localStorage.getItem('storedSightings')
    let sightings = JSON.parse(stringedSightings);
    const newSighting = areaBirds.find(bird => bird.speciesCode === event.target.name);
    const addSighting = {
      dateSeen: new Date(),
      speciesCode: newSighting.speciesCode,
      comName: newSighting.comName,
      sciName: newSighting.sciName
    }
    sightings.push(addSighting)
    localStorage.setItem('storedSightings', JSON.stringify(sightings))
  }

  //date needs formatted
  //need to go through and set checked to true
  //need to remove a bird from localStorage, too


  const checkBox = () => {
    let checked;
    checked = checked ? false : true
  }

  const possibleBirds = areaBirds.map(bird => {
    return <Bird
        key={bird.speciesCode}
        bird={bird}
        checkBox={checkBox}
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
