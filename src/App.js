import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//----------------Components--------------------//
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/auth/Login/Login';
import Profile from './components/Profile/Profile';
import AboutUs from './components/AboutUs/AboutUs';
import LandingPage from './components/Landing-page/LandingPage';
import ProductCards from './components/ProductPage/ProductCards/ProductCards';
import ProductDetails from './components/ProductPage/ProductDetails/ProductDetails';
import ServiceCards from './components/ServicePage/ServiceCards/ServiceCards.js';
import ServiceDetails from './components/ServicePage/ServiceDetails/ServiceDetails';
import ItemPage from './components/itemPage/ItemPage';
import Cart from './components/ShoppingCart/ShoppingCart';


import SignIn from './components/auth/signin/SignIn';
import SignUp from './components/auth/signup/SignUp';
//-----------------Contexts-----------------//
import NavContext from './context/navContext';
import ServicesProvider from './context/AllServices';
import ProductsProvider from './context/AllProducts';
//-------------------------------------------//

import { AuthContext } from '../src/context/authContext';

//--------------------------------------------//
function App() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = `SAB3AT${' '}$`;
  }, []);

  return (
    <>
      <Router>
        <NavContext>
          <ServicesProvider>
            <ProductsProvider>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                {/* //---------------------------------------------------// */}
                <Route exact path="/signin">
                  <SignIn />
                </Route>
                <Route exact path="/signup">
                  <SignUp />
                </Route>
                {/* //---------------------------------------------------// */}
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
                <Route exact path="/about">
                  <AboutUs />
                </Route>
                <Route
                  path="/admin"
                  component={() => {
                    window.location.href = `https://sab3at-dashboard.netlify.app/?q=${user.id}`; //token should pass as param and (usequiry)* or useparams
                    return null;
                  }}
                />
                <Route
                  path="/payment"
                  component={() => {
                    window.location.href = `https://sab3at.herokuapp.com/payment`; //token should pass as param and (usequiry)* or useparams
                    return null;
                  }}
                />
              </Switch>
              <Footer />
            </ProductsProvider>
          </ServicesProvider>
        </NavContext>
      </Router>
    </>
  );
}

export default App;
