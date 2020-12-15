import bananasImage from './images/bananas.jpg';
import appleImage from './images/apple.jpg';
import papayaImage from './images/papaya.jpg';

const Products = [
  {
    title: 'Bananas',
    img: bananasImage,
    inputId: 'bananas-amount',
    price: 10,
    amount: 0,
    inCart: false,
    totalPrice: function() {
      const newPrice = this.price * this.amount;
      return newPrice;
    }
  },
  {
    title: 'Apples',
    img: appleImage,
    inputId: 'apples-amount',
    price: 8,
    amount: 0,
    inCart: false,
    totalPrice: function() {
      const newPrice = this.price * this.amount;
      return newPrice;
    }
  },
  {
    title: 'Papayas',
    img: papayaImage,
    inputId: 'papayas-amount',
    price: 10,
    amount: 0,
    inCart: false,
    totalPrice: function() {
      const sale = (Math.floor(this.amount / 3)) * (this.price * 0.5);
      const newPrice = (this.price * this.amount) - sale;
      return newPrice;
    }
  }
];

export default Products;
