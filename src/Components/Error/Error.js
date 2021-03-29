import React from 'react';
import './Error.css'
import error from '../../Assets/error.jpg';

const Error = () => {
  return (
    <section className='error'>
        <article>
          <h3>Whoops! There's been a problem.</h3>
          <img src={ error } alt='owl tilting its head' />
        </article>
    </section>
  )
}

export default Error;
