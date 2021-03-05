import React from 'react';
import { Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import Highlight from '../Highlight/Highlight';
import Nav from '../Nav/Nav';

const App = () => {
  return (
      <main className="App">
        <header>
          <h1>welcome to the flock</h1>
        </header>
        <Highlight />
        <Nav />
      </main>
  );
}

//will use link to go to other components
//redirect will be used for Error
//when does the home route belong?
//use Switch?

//Error handling & react Hooks
//Loading & react Hooks

export default App;
