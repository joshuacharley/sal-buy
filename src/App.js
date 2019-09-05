import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const MobilePhonesPage = () => (
  <div>
    <h1>MobilePhones PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/mobilephones' component={MobilePhonesPage} />
      </Switch>
    </div>
  );
}

export default App;