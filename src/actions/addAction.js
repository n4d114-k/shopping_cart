import * as actionTypes from './types';
import Products from '../data.js';

function addToCart(e, productName, amount) {
  return(dispatch) => {
    e.preventDefault();
    e.target[1].setAttribute("disabled", "disabled");

    const findProduct = Products.find((product) => {
      const productObj = product.title === productName;
      return productObj;
    });
    findProduct.amount = amount;

    dispatch(
      {
        type: actionTypes.ADD_PRODUCT,
        payload: productName,
        amount: amount
      }
    );
  }
}

export default addToCart;
