import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
import TopList from './Components/TopList/TopList';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/home' component={ App } />
      <Route path='/top50' component={ TopList } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
