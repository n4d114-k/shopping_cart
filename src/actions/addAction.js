import * as actionTypes from './types';

/*export function addToCart(e, productName) {
  return(dispatch) => {
    e.preventDefault();
    e.target.setAttribute("disabled", "disabled");

    const findProduct = Products.find((product) => {
      const productObj = product.title === productName;
      return productObj;
    });

    dispatch(
      {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: productName,
      }
    );
  }
} */

export const addToCart = (e, productTitle) => {
  return(dispatch) => {
    console.log('Adding to Cart ', productTitle);
    e.target.setAttribute("disabled", "disabled");

    dispatch({
      type: actionTypes.ADD_PRODUCT_TO_CART,
      payload: productTitle
    });
  }
}
