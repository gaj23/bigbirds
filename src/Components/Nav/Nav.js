import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <button>Home</button>
      <button>Top 100</button>
      <button>Sightings</button>
      <button>About</button>
    </nav>
  )
}

export default Nav;
