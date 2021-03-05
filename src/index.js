import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/home' component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
