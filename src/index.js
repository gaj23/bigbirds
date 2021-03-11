import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
import TopList from './Components/TopList/TopList';
import Details from './Components/Details/Details';
import PersonalList from './Components/PersonalList/PersonalList';
import Error from './Components/Error/Error';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ App } />
      <Route path='/top_30' component={ TopList } />
      <Route path='/bird_details/:id' component={ Details }/>
      <Route path='/seen' component= { PersonalList } />
      <Route path='/error' component={ Error } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
