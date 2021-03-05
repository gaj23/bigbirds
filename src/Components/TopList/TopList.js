import React, { useState, useEffect } from 'react';
import './TopList';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Bird from '../Bird/Bird';

const TopList = () => {
  const [areaBirds, setAreaBirds] = useState([])

  useEffect(() => {
      fetch('https://api.ebird.org/v2/data/obs/US-CO/recent?back=7&maxResults=50&key=jcsp15jhp6hi')
        .then(response => response.json())
        .then(data => setAreaBirds(data))

      console.log(areaBirds)
    }, [])

  console.log(areaBirds)

  const possibleBirds = areaBirds.map(bird => {
    return <Bird
        key={bird.speciesCode}
        id={bird.speciseCode}
        comName={bird.comName}
      />
  })

  return (
    <>
    <Header />
    <section className='topList'>
      <h1>List all the birdies! </h1>
      <table>
        <thead>
          <tr>
              <th colspan="2">Seen it? Check it off!</th>
          </tr>
        </thead>
        {possibleBirds}
      </table>
    </section>
    <Nav />
    </>
  )
}

export default TopList;
