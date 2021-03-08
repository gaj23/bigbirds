import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './TopList.css';
import apiCalls from '../../apiCalls';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Bird from '../Bird/Bird';
import Loading from '../Loading/Loading';

const TopList = () => {
  const [areaBirds, setAreaBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    setAreaBirds(data);
    setLoading(false);
   }

  const possibleBirds = areaBirds.map(bird => {
    return <Bird
        key={bird.speciesCode}
        bird={bird}
      />
  })

  return (
    <section className='topList'>
      <Header />
      {error && <Redirect to='/error' />}
      {loading && !error && <Loading />}
      {!loading && !error &&
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
      }
      <Nav />
    </section>
  )
}

export default TopList;
