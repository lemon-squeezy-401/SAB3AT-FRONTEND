import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LandingPage from './components/Landing-page/LandingPage';
import ProductPage from './components/ProductPage/ProductPage';
import Login from './components/auth/Login/Login';
import AuthContext from './context/authContext';
import Profile from './components/Profile/Profile';
import NavContext from './context/navContext';

function App() {
  return (
    <>
      <Router>
        <AuthContext>
          <NavContext>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route exact path="/product">
                <ProductPage />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/dashboard">
                <Profile />
              </Route>
            </Switch>
            <Footer />
          </NavContext>
        </AuthContext>
      </Router>
    </>
  );
}

export default App;
