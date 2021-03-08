import React from 'react';
import './TopList.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Bird from '../Bird/Bird';

const TopList = () => {
  const topBirds = localStorage.getItem('topBirds')
  const areaBirds = JSON.parse(topBirds)

    const checkList = () => {
      const stringedSightings = localStorage.getItem('storedSightings')
      let sightings = JSON.parse(stringedSightings);

      areaBirds.forEach(bird => {
        sightings.find(myBird => {
          if(myBird.speciesCode === bird.speciesCode) {            return 'checked'
        } else {
          console.log('false')
        }
      })
      })
    }



    //if bird is in seen birds, then checked is true

  const updateList = (event) => {
    if (event.target.checked){
      addToList(event)
    } else if (!event.target.checked) {
      removeFromList(event)
    }
  }

  const addToList = (event) => {
    const stringedSightings = localStorage.getItem('storedSightings')
    let sightings = JSON.parse(stringedSightings);

    const findBird = areaBirds.find(bird => bird.speciesCode === event.target.name);
    const date = new Date()
    const addSighting = {
      dateSeen: formatDate(date),
      speciesCode: findBird.speciesCode,
      comName: findBird.comName,
      sciName: findBird.sciName
    }

    sightings.push(addSighting)
    localStorage.setItem('storedSightings', JSON.stringify(sightings))
  }

  const removeFromList = (event) => {
    const stringedSightings = localStorage.getItem('storedSightings')
    let sightings = JSON.parse(stringedSightings);
    //refactor above into own json helper function

    sightings = sightings.filter(bird => bird.speciesCode !== event.target.name)

    localStorage.setItem('storedSightings', JSON.stringify(sightings))
  }

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`
  }

  const possibleBirds = areaBirds.map(bird => {
    return <Bird
        key={bird.speciesCode}
        bird={bird}
        updateList={updateList}
        isChecked={checkList}
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
