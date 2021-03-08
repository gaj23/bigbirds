import React, { useState, useEffect } from 'react';
import apiCalls from '../../apiCalls';
import { Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header'
import Highlight from '../Highlight/Highlight';
import Nav from '../Nav/Nav';
import sightings from '../../data/sightingsData';
import Loading from '../Loading/Loading';


const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const seenBirds = JSON.parse(localStorage.getItem('storedSightings'));
  const areaBirds = JSON.parse(localStorage.getItem('topBirds'));

  if(!localStorage.getItem('storedSightings')) {
    localStorage.setItem('storedSightings', JSON.stringify(sightings));
  }

  useEffect(() => {
      apiCalls.getTopBirds()
        .then(response => checkForError(response))
        .then(data => setState(data))
        .catch(error => {
          setError(true)
          setLoading(false)
        })
    }, [])

  const checkForError = (response) => {
    if(!response.ok) {
      setLoading(false);
      setError(true);
    } else {
      return response.json()
    }
  }

  const setState = (data) => {
    localStorage.setItem('topBirds', JSON.stringify(data));
    setLoading(false);
   }

  const getRandomIndex = (array) => {
   return Math.floor(Math.random() * array.length);
  }

  const chooseBird = () => {
    const allBirds = seenBirds.concat(areaBirds);
    const speciesCodeBirds = allBirds.map(bird => bird.speciesCode);
    const highlightBirds = speciesCodeBirds.reduce((acc, bird) => {
      if(!acc.includes(bird)){
        acc.push(bird)
      }
      return acc
    }, [])
    return highlightBirds[getRandomIndex(highlightBirds)]
  }

  const findBird = () => {
    return areaBirds.find(bird => bird.speciesCode === chooseBird())
  }

  return (
      <main className="App">
        <Header />
        {!error && loading && <Loading />}
        {error && !loading && <Redirect to='/error' />}
        {!error && !loading && <Highlight bird={findBird()}/>}
        <Nav />
      </main>
  );
}

export default App;
