import React, { useState ,useEffect } from 'react';
import './navbar.css';

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
    <div id = 'con'>
      <nav className={navbar? 'nav active' : 'nav' }>
        <div className="container">
          <h1 className="logo"><a href="/">$SAB3AT$</a></h1>
          <ul>
            <li><a href="/home" className="current">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Login</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nanbar;
