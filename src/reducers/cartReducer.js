import * as actionTypes from '../actions/types';
import Products from '../data.js';


const initialState = {
  productsAmount: 0,
  cartCost: 0,
  products: Products
};

function cartReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:

      const foundProduct = Products.findIndex((product) => {
        const productObj = product.title === action.payload;
        return productObj;
      });

      const toggle = (arr, title) => arr.map(p => p.title === title ? { ...p, amount: p.amount + 1, inCart: !p.inCart } : p);
      const newProducts = toggle(state.products, action.payload);

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
    default:
      return state;
  }
}

export default cartReducer;
