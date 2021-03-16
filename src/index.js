import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
import TopList from './Components/TopList/TopList';
import Details from './Components/Details/Details';
import PersonalList from './Components/PersonalList/PersonalList';
import Error from './Components/Error/Error';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Nav />
    <Switch>
      <Route exact path='/' component={ App } />
      <Route exact path='/top_30' component={ TopList } />
      <Route exact path='/bird_details/:id' component={ Details }/>
      <Route exact path='/seen' component= { PersonalList } />
      <Route exact path='/error' component={ Error } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
