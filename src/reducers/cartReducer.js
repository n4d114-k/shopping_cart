import * as actionTypes from '../actions/types';
import Products from '../data.js';


const initialState = {
  productsAmount: 0,
  cartCost: 0,
  products: Products
};

function cartReducer(state = initialState, action) {

  const foundProduct = Products.findIndex((product) => {
    const productObj = product.title === action.payload;
    return productObj;
  });

  const toggle = (arr, title) => arr.map(p => p.title === title ? { ...p, amount: p.amount + 1, inCart: !p.inCart } : p);
  const newProducts = toggle(state.products, action.payload);

  switch(action.type) {
      case actionTypes.ADD_PRODUCT_TO_CART:
        return {
          ...state,
          productsAmount: state.productsAmount + 1,
          cartCost: state.cartCost + state.products[foundProduct].price,
          products: newProducts
        };
      case actionTypes.GET_AMOUNT_IN_CART:
        return {
          ...state
        };
      case actionTypes.INCREASE_AMOUNT:
        state.products[foundProduct].amount += 1;
        return {
          ...state,
          cartCost: state.cartCost + state.products[foundProduct].price,
        };
      case actionTypes.DECREASE_AMOUNT:
        let newCartCost = 0;
        if(state.products[foundProduct].amount === 0) {
          state.products[foundProduct].amount = 0;
          newCartCost = state.cartCost;
        } else {
          state.products[foundProduct].amount -= 1;
          newCartCost = state.cartCost - state.products[foundProduct].price
        }
        return {
          ...state,
          cartCost: newCartCost
        };
      default:
        return state;
  }
}

export default cartReducer;
