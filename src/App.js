import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/auth/Login/Login';
import AuthContext from './context/authContext';
import Profile from './components/Profile/Profile';
import NavContext from './context/navContext';
import LandingPage from './components/Landing-page/LandingPage';
import ProductCards from './components/ProductPage/ProductCards/ProductCards';
import ProductDetails from './components/ProductPage/ProductDetails/ProductDetails';
import ServiceCards from './components/ServicePage/ServiceCards/ServiceCards.js';
import ServiceDetails from './components/ServicePage/ServiceDetails/ServiceDetails';
import ItemPage from './components/itemPage/ItemPage';
import Cart from './components/ShoppingCart/ShoppingCart';
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
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/dashboard">
                <Profile />
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
              <Route exact path="/item">
                <ItemPage />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route
                path="/admin"
                component={() => {
                  window.location.href = 'http://localhost:3001';
                  return null;
                }}
              />
            </Switch>
            <Footer />
          </NavContext>
        </AuthContext>
      </Router>
    </>
  );
}

export default App;
