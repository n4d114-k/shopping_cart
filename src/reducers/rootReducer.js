import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import cartCostReducer from './cartCostReducer';
import cartListReducer from './cartListReducer';


export default combineReducers({
  cartState: cartReducer,
  cartCost: cartCostReducer,
  cartList: cartListReducer
});
