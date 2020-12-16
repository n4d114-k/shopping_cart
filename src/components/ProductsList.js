import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/addAction';
import SaleWarning from './SaleWarning';

function ProductsList({cartProps, addToCart}) {
  return(
    <div className="products-container">
      <SaleWarning />
      <React.Fragment>
        {cartProps.products.map((product) => (
          <div className="product-card" key={product.productId}>
            <h3>{product.title} <span>{product.price.toFixed(2)}$</span></h3>
            <img src={product.img} alt={product.title}/>
            <button disabled={product.inCart ? 'disabled' : ''} type="button" onClick={() => addToCart(product.title)}>
              {product.inCart ? 'Already in Cart' : 'Add to Cart'}</button>
          </div>
        ))}
      </React.Fragment>
    </div>
  );
}

const mapStateToProps = state => ({
  cartProps: state.cartState
});

export default connect(mapStateToProps, { addToCart })(ProductsList);
