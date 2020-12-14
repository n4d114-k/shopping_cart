import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import addToCart from '../actions/addAction';
import getProductsAmount from '../actions/getAction';
import logo from './../logo.svg';

function Navbar(props) {
  useEffect(() => {
    getProductsAmount();
  }, []);

  return (
      <nav>
        <img src={logo} className="app-logo" alt="logo" />
        <h1>GROCERY<br />STORE</h1>
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">cart <span className="items-counter">{props.cartProps}</span></a></li>
        </ul>
      </nav>
  );
}

const mapStateToProps = state => ({
  cartProps: state.cartState
})

export default connect(mapStateToProps, { getProductsAmount })(Navbar);
