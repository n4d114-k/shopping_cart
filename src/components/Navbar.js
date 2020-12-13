import React from 'react';
import logo from './../logo.svg';

function Navbar() {
  return (
      <nav>
        <img src={logo} className="app-logo" alt="logo" />
        <h1>GROCERY<br />STORE</h1>
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">cart <span className="items-counter">0</span></a></li>
        </ul>
      </nav>
  );
}

export default Navbar;
