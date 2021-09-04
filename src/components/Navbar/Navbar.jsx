import React, { useState ,useEffect, useContext } from 'react';
import { If, Then, Else } from 'react-if';
import { AuthContext } from '../../context/authContext';
import { NavContext } from '../../context/navContext';
import './navbar.css';

// style
import cartIcon from '../../assets/cart.svg';
import listIcon from '../../assets/list.svg';
// import loginIcon from '../../assets/login.svg';
// import logoutIcon from '../../assets/logout.svg';

function Nanbar() {
  const authSettings = useContext(AuthContext);
  const navSettings = useContext(NavContext);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <div id = 'con' className = 'navbar-body'>
      <nav className={navbar? 'nav1 active-nav' : 'nav1' }>
        <div className="nav-container1">
          <h1 className="nav-logo"><a href="/">$SAB3AT$</a></h1>
          <If condition = {!authSettings.loggedIn}>
            <Then>
              <ul className = 'navbar-ul'>
                <li><a href="/home" className="nav-current">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/cart">Cart <img src={cartIcon} alt="any" /></a></li>
              </ul>
            </Then>
            <Else>
              <ul className = 'navbar-ul'>
                <li><a href="/home" className="nav-current">Home</a></li>
                <li><a onClick = {authSettings.logout} href="/">Logout</a></li>
                <li><a href="/cart">Cart <img src={cartIcon} alt="any" /></a></li>
              </ul>
            </Else>
          </If>
        </div>
      </nav>
      {/* second */}
      <nav className={navbar? 'nav2 active-nav' : 'nav2' }>
        <div className="nav-container2">
          <If condition ={authSettings.loggedIn}>
            <Then>
              <ul className = 'navbar-ul'>
                <img style = {{cursor: 'pointer', paddingRight: '5px'}} onClick = {navSettings.handleShow} src={listIcon} alt="list"/>
                <li><a href="/services">Services</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/dashboard">My Profile</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </Then>
            <Else>
              <ul className = 'navbar-ul'>
                <li><a href="/services">Services</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </Else>
          </If>
        </div>
      </nav>
    </div>
  );
}

export default Nanbar;
