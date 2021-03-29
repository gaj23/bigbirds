import React, { useState, useEffect } from 'react';
import apiCalls from '../../apiCalls';
import { Redirect } from 'react-router-dom';
import './App.css';
import Highlight from '../Highlight/Highlight';
import sightings from '../../data/sightingsData';
import Loading from '../Loading/Loading';


const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  return (
      <main className="App">
        {!error && loading && <Loading />}
        {error && !loading && <Redirect to='/error' />}
        {!error && !loading && <Highlight />}
      </main>
  );
}

export default App;
