import React, { useState } from 'react';
import Products from '../data.js';

import SaleWarning from './SaleWarning';

function ProductsList() {

  function addToCart(e) {
    e.preventDefault();
    console.log(e.target["0"].value);
  }

  return(
    <div className="products-container">
      <SaleWarning />
      <React.Fragment>
        {Products.map((product) => (
          <div className="product-card" key={product.inputId}>
            <h3>{product.title}</h3>
            <img src={product.img} alt={product.title}/>
            <form onSubmit={addToCart}>
              <label htmlFor={product.inputId}>Amount(in kg)</label>
              <input type="number" id={product.inputId} name="kilograms" min="1"/>
              <p>Total price: <b>{product.price}$</b></p>
              <input type="submit" value="Add to Cart" />
            </form>
          </div>
        ))}
      </React.Fragment>
    </div>
  );
}

export default ProductsList;
