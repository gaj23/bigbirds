import React from 'react';
import './Error.css'
import error from '../../Assets/error.jpg';
import Header from '../Header/Header'
import Nav from '../Nav/Nav';

const Error = () => {
  return (
    <section className='error'>
      <Header/>
        <article>
          <h3>Whoops! There's been a problem.</h3>
          <img src={ error } alt='owl tilting its head' />
        </article>
      <Nav />
    </section>
  )
}

export default Error;
