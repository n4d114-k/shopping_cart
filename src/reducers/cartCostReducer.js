import * as actionTypes from '../actions/types';


function cartCostReducer(state = 0, action) {
  switch(action.type) {
    case actionTypes.ADD_PRODUCTS_COST:
      return state;
    case actionTypes.GET_PRODUCTS_COST:
      return state;
    default:
      return state;
  }
}

export default cartCostReducer;
