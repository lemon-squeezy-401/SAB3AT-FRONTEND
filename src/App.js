import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/auth/Login/Login';
import LandingPage from './components/Landing-page/LandingPage';
import ProductCards from './components/ProductPage/ProductCards/ProductCards';
import ProductDetails from './components/ProductPage/ProductDetails/ProductDetails';
import ServiceCards from './components/ServicePage/ServiceCards/ServiceCards.js';
import ServiceDetails from './components/ServicePage/ServiceDetails/ServiceDetails';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/products">
            <ProductCards />
          </Route>

          <Route exact path="/ProductDetails">
            <ProductDetails />
          </Route>

          <Route exact path="/services">
            <ServiceCards />
          </Route>
          <Route exact path="/ServiceDetails">
            <ServiceDetails />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
