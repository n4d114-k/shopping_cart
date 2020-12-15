import * as actionTypes from './types';

export const productAmount = (action, productTitle) => {
  return(dispatch) => {
    dispatch({
      type: action === 'increase' ? actionTypes.INCREASE_AMOUNT : actionTypes.DECREASE_AMOUNT,
      payload: productTitle
    });
  }
}
