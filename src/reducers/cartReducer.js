import * as actionTypes from '../actions/types';


function cartReducer(state = 0, action) {
  switch(action.type) {
    case actionTypes.ADD_PRODUCT:
      return state + 1;
    case actionTypes.GET_PRODUCTS_AMOUNT:
      return state;
    default:
      return state;
  }
}

export default cartReducer;
