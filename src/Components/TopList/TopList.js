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
    console.log('before', sightings)
    const newSighting = areaBirds.find(bird => bird.speciesCode === event.target.name)
    sightings.push(newSighting)
    console.log('after', sightings.length)
    console.log(stringedSightings)
  }
  //set & update 'storedSightings'
  //we have the speciesCode, need to find the matching speciseCode, push that object into stored birds & update that list

//is this one needed?
  let checked;
  const checkBox = () => {
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
