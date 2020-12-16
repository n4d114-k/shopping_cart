import React from 'react';
import { connect } from 'react-redux';

import { productAmount, deleteProduct } from '../actions/productAmount';

function Cart({cartProps, productAmount, deleteProduct}) {

  const productsInCart = [];
  cartProps.products.forEach((item) => {
    if(item.inCart) {
      productsInCart.push(item)
    }
  });
  const totalPriceArray = productsInCart.map((product) => product.totalPrice());
  let totalPriceSum = 0;
  for(let i=0; i < totalPriceArray.length; i++){
      totalPriceSum = totalPriceSum + parseInt(totalPriceArray[i]);
  }

  return(
    <div className="products-cart-container">
      {productsInCart.map((product) => (
        <div className="product-cart-card" key={product.productId}>
          <div className="title">
            <img src={product.img} alt={product.title}/>
            <p>{product.title}</p>
          </div>
          <div className="price">{product.price.toFixed(2)}$</div>
          <div className="amount">

            <button type="button" disabled={product.amount > 0 ? '' : 'disabled'} className="decrease" onClick={() => productAmount('decrease', product.title)}>-</button>
            <p>{product.amount}</p>
            <button type="button" className="increase" onClick={() => productAmount('increase', product.title)}>+</button>
            <p className="total">Total: {(product.totalPrice()).toFixed(2)}$</p>
            <button type="button" className="delete" onClick={() => deleteProduct(product.title)}>&times;</button>
          </div>
        </div>
      ))}
      <div className="cart-total">{cartProps.cartCost > 0 ? `Cart Total: ${totalPriceSum.toFixed(2)}$` : 'Your Cart is Empty'}</div>
    </div>
  );
}

const mapStateToProps = state => ({
  cartProps: state.cartState
});

export default connect(mapStateToProps, { productAmount, deleteProduct })(Cart);
