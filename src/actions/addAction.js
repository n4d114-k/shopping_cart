import * as actionTypes from './types';

export const addToCart = (productTitle) => {
  return(dispatch) => {
    dispatch({
      type: actionTypes.ADD_PRODUCT_TO_CART,
      payload: productTitle
    });
  }
}
