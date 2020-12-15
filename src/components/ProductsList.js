import React from 'react';
import { connect } from 'react-redux';

import addToCart from '../actions/addAction';
import Products from '../data.js';
import SaleWarning from './SaleWarning';

function ProductsList(props) {
  return(
    <div className="products-container">
      <SaleWarning />
      <React.Fragment>
        {Products.map((product) => (
          <div className="product-card" key={product.inputId}>
            <h3>{product.title}</h3>
            <img src={product.img} alt={product.title}/>
            <form onSubmit={(e) => props.addToCart(e, product.title, e.target[0].value)}>
              <label htmlFor={product.inputId}>Amount(in kg)</label>
              <input type="number" id={product.inputId} name="kilograms" min="1" />
              <p>Total price: <b>{product.totalPrice(product.amount)}$</b></p>
              <input type="submit" value="Add to Cart"/>
            </form>
          </div>
        ))}
      </React.Fragment>
    </div>
  );
}

export default connect(null, { addToCart })(ProductsList);
