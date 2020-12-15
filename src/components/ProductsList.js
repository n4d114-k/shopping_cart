import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/addAction';
import Products from '../data.js';
import SaleWarning from './SaleWarning';

function ProductsList(props) {
  return(
    <div className="products-container">
      <SaleWarning />
      <React.Fragment>
        {Products.map((product) => (
          <div className="product-card" key={product.inputId}>
            <h3>{product.title} <span>{product.price}$</span></h3>
            <img src={product.img} alt={product.title}/>
            <button type="button" onClick={(e) => props.addToCart(e, product.title)}>
              Add to Cart</button>
          </div>
        ))}
      </React.Fragment>
    </div>
  );
}

export default connect(null, { addToCart })(ProductsList);
