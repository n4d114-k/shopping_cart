import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <li><Link to="/">home</Link></li>
          <li><Link to="about">about</Link></li>
          <li><Link to="cart">cart <span className="items-counter">{props.cartProps}</span></Link></li>
        </ul>
      </nav>
  );
}

const mapStateToProps = state => ({
  cartProps: state.cartState
})

export default connect(mapStateToProps, { getProductsAmount })(Navbar);
