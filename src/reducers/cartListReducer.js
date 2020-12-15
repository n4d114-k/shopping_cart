import * as actionTypes from '../actions/types';
import Products from '../data.js';


function cartListReducer(state = [], action) {
  switch(action.type) {
    case actionTypes.ADD_PRODUCT_TO_LIST:
      return state;
    case actionTypes.GET_PRODUCTS_LIST:
      return state;
    default:
      return state;
  }
}

export default cartListReducer;
