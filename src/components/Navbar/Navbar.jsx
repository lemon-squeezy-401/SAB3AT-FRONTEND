import React, { useState, useEffect } from 'react';
import './navbar.css';
import cartIcon from '../../assets/cart.svg';

function Nanbar() {
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
    <div id='con' className='navbar-body'>
      <nav className={navbar ? 'nav active-nav' : 'nav'}>
        <div className="nav-container">
          <h1 className="nav-logo"><a href="/">$SAB3AT$</a></h1>
          <ul className='navbar-ul'>
            {/* <li><a href="/home" className="nav-current">Home</a></li> */}
            <li><a href="/" className="nav-current">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/cart">Cart <img src={cartIcon} alt="any" /></a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nanbar;
