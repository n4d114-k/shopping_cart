import React from 'react';
import { connect } from 'react-redux';
import { productAmount } from '../actions/productAmount';



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
        <div className="product-cart-card" key={product.inputId}>
          <div className="title">
            <img src={product.img} alt={product.title}/>
            <p>{product.title}</p>
          </div>
          <div className="price">{product.price},00$</div>
          <div className="amount">
            <button type="button" className="decrease" onClick={() => productAmount('decrease', product.title)}>-</button>
            <p>{product.amount}</p>
            <button type="button" className="increase" onClick={() => productAmount('increase', product.title)}>+</button>
            <p className="total">Total: {product.totalPrice()},00$</p>
          </div>
        </div>
      ))}
      <div className="cart-total">Cart Total: {totalPriceSum},00$</div>
    </div>
  );
}

const mapStateToProps = state => ({
  cartProps: state.cartState
});

export default connect(mapStateToProps, { productAmount })(Cart);
