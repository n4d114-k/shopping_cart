import * as actionTypes from './types';

function getProductsAmount() {
  return(dispatch) => {
    console.log('Getting products amount');
    dispatch(
      {
        type: actionTypes.GET_PRODUCTS_AMOUNT
      }
    );
  }
}

export default getProductsAmount;
