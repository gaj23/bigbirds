import React, { useState, useEffect } from 'react';
import './TopList.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Bird from '../Bird/Bird';

const TopList = () => {
  const [areaBirds, setAreaBirds] = useState([])

  useEffect(() => {
      fetch('https://api.ebird.org/v2/data/obs/US-CO/recent?back=2&maxResults=50&key=jcsp15jhp6hi')
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
    <section className='topList'>
      <Header />
      <h2>Birds in your Area</h2>
      <table>
        <thead>
          <tr>
              <th colspan="2">Seen it? Check it off!</th>
          </tr>
        </thead>
        <tbody>
          {possibleBirds}
        </tbody>
      </table>
      <Nav />
    </section>
  )
}

export default TopList;
