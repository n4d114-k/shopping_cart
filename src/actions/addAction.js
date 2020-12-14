import * as actionTypes from './types';

function addToCart() {
  return(dispatch) => {
    console.log('Adding to cart');
    dispatch(
      {
        type: actionTypes.ADD_PRODUCT
      }
    );
  }
}

export default addToCart;
