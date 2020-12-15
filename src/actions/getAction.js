import * as actionTypes from './types';

export const getAmount = () => {
  return(dispatch) => {
    console.log('Getting Amount');
    dispatch({
      type: actionTypes.GET_AMOUNT_IN_CART,
    });
  }
}
