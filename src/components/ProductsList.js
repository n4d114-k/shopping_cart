import React from 'react';
import { connect } from 'react-redux';

import addToCart from '../actions/addAction';
import Products from '../data.js';
import SaleWarning from './SaleWarning';

function ProductsList(props) {

  function onSubmit(e) {
    e.preventDefault();
    e.target[1].setAttribute("disabled", "disabled");
  }

  return(
    <div className="products-container">
      <SaleWarning />
      <React.Fragment>
        {Products.map((product) => (
          <div className="product-card" key={product.inputId}>
            <h3>{product.title}</h3>
            <img src={product.img} alt={product.title}/>
            <form onSubmit={onSubmit}>
              <label htmlFor={product.inputId}>Amount(in kg)</label>
              <input type="number" id={product.inputId} name="kilograms" min="1"/>
              <p>Total price: <b>{product.totalPrice(1)}$</b></p>
              <input type="submit" value="Add to Cart" onClick={props.addToCart}/>
            </form>
          </div>
        ))}
      </React.Fragment>
    </div>
  );
}

export default connect(null, { addToCart })(ProductsList);
