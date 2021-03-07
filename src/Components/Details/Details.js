import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';
import images from '../../data/imagesData';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';


const Details = () => {
  const location = useLocation();
  const { speciesCode, comName, sciName } = location.state

  const birdImage = () => {
    if (images[speciesCode] === undefined) {
      return 'https://lh3.googleusercontent.com/proxy/2Glg8bEJYDUFmlsYVPtSYSsemOIYKVw7MRlLdEH6ryZUSThHwLfW0PSRbsGVJ640j0xB2MREMrtA6LxHwHjtE8UTEBbhIJ4'
    } else {
      return images[speciesCode]
    }
  }

  const moreInfo = () => {
    let bird;
    if(comName.includes(' ')) {
       bird = comName.split(' ').join('_')
    }
    return `https://www.allaboutbirds.org/guide/${bird}/`
  }

  return (
    <section className='bird-details'>
      <Header />
      <h2>About the {comName}</h2>
      <article>
        <img src={birdImage()} alt={comName}/>
        <h3>{comName}</h3>
        <h4><em>{sciName}</em></h4>
        <a href={moreInfo()} target='_blank' rel='noreferrer'><h5>Learn more here!</h5></a>
      </article>
      <Nav />
    </section>
  )
}

export default Details;
