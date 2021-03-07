import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
import TopList from './Components/TopList/TopList';
import Details from './Components/Details/Details';
import PersonalList from './Components/PersonalList/PersonalList'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/home' component={ App } />
      <Route path='/top_30' component={ TopList } />
      <Route path='/bird_details/:id'
      render={({ match }) => {
        console.log('inside route', match)
              return (
                <Details
                  id={match.params.id}
                />
                );
              }}  />
      <Route path='/seen' component= { PersonalList } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
