import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/Landing-page/LandingPage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path = '/'>
            <LandingPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
