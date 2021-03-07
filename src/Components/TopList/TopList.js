import React, { useState, useEffect } from 'react';
import './TopList.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Bird from '../Bird/Bird';
import apiCalls from '../../apiCalls'

const TopList = () => {
  const [areaBirds, setAreaBirds] = useState([])

  useEffect(() => {
      apiCalls.getTopBirds()
        .then(data => setAreaBirds(data))
        .catch(error => console.log(error))
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
              <th colSpan="2">Seen it? Check it off!</th>
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
