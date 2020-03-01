import React from 'react';
import {Route} from 'react-router-dom'

import classes from './App.css';
import LandingPage from './containers/LandingPage/LandingPage';

function App() {
  return (
    <div className={classes.App}>
      <LandingPage />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
    </div>
  );
}

export default App;
