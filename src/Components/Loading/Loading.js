import React from 'react';
import './Loading.css';
import loading from '../../Assets/loading.jpg';

const Loading = () => {
  return (
    <section className='loading'>
      <h3>Please wait</h3>
      <img src={loading} alt='unhatched eggs' />
    </section>
  )
}

export default Loading;
