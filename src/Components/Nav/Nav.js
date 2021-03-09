import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link to='/home'>
        <button>Home</button>
      </Link>
      <Link to='/top_30'>
        <button>Top 30</button>
      </Link>
      <Link to='/seen'>
        <button>Seen</button>
      </Link>
    </nav>
  )
}

export default Nav;
