import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './TopList.css';
import apiCalls from '../../apiCalls';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Bird from '../Bird/Bird';
import Loading from '../Loading/Loading';

const TopList = () => {
  const topBirds = localStorage.getItem('topBirds')
  const areaBirds = JSON.parse(topBirds)


  const possibleBirds = areaBirds.map(bird => {
    return <Bird
        key={bird.speciesCode}
        bird={bird}
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
