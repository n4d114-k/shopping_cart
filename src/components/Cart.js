import React from 'react';
import { connect } from 'react-redux';



function Cart({cartProps}) {

  const productsInCart = [];
  cartProps.products.forEach((item) => {
    if(item.inCart) {
      productsInCart.push(item)
    }
  });

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
            <button type="button" className="decrease">-</button>
            <p>{product.amount}</p>
            <button type="button" className="increase">+</button>
            <p className="total">Total: {product.totalPrice()},00$</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  cartProps: state.cartState
});

export default connect(mapStateToProps)(Cart);
