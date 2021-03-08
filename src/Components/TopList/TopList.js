import React, { useState, useEffect } from 'react';
import './TopList.css';
import apiCalls from '../../apiCalls';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Bird from '../Bird/Bird';
import Loading from '../Loading/Loading';

const TopList = () => {
  const [areaBirds, setAreaBirds] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      apiCalls.getTopBirds()
        .then(data => setState(data))
        .catch(error => console.log(error))
    }, [])

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
      {loading && <Loading />}
      {!loading &&
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
