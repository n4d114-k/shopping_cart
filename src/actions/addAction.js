import * as actionTypes from './types';

export const addToCart = (e, productTitle) => {
  return(dispatch) => {
    e.target.setAttribute("disabled", "disabled");
    dispatch({
      type: actionTypes.ADD_PRODUCT_TO_CART,
      payload: productTitle
    });
  }
}
