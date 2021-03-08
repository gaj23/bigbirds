import React, { useState } from 'react';
import './TopList.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Bird from '../Bird/Bird';

const TopList = () => {
  const areaBirds = JSON.parse(localStorage.getItem('topBirds'));

  const [sightings, setSightings] = useState(JSON.parse(localStorage.getItem('storedSightings')));

  const checkList = (event) => {
    if(!sightings.find(bird=> bird.speciesCode === event.target.name)) {
      addToList(event)
    } else {
      removeFromList(event)
    }
  }

  const addToList = (event) => {
    const findBird = areaBirds.find(bird => bird.speciesCode === event.target.name);

    const date = new Date()
    const addSighting = {
      dateSeen: formatDate(date),
      speciesCode: findBird.speciesCode,
      comName: findBird.comName,
      sciName: findBird.sciName
    }

    sightings.push(addSighting)
    setSightings(sightings);
    localStorage.setItem('storedSightings', JSON.stringify(sightings))
  }

  const removeFromList = (event) => {
    const updatedList = sightings.filter(bird => bird.speciesCode !== event.target.name)

    setSightings(updatedList);
    localStorage.setItem('storedSightings', JSON.stringify(updatedList))
  }

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`
  }

  const possibleBirds = () => {
    return areaBirds.map(bird => {
    let checked = null;
    if(sightings.find(myBird => bird.speciesCode === myBird.speciesCode)) {
      checked = true;
    }
    return <Bird
        key={bird.speciesCode}
        bird={bird}
        checked={checked}
        checkList={checkList}
       />
   })
  }

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
              {possibleBirds()}
            </tbody>
          </table>
        </article>
      <Nav />
    </section>
  )
}

export default TopList;
