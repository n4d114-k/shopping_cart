import bananasImage from './images/bananas.jpg';
import appleImage from './images/apple.jpg';
import papayaImage from './images/papaya.jpg';

const Products = [
  {
    'title': 'Bananas',
    'img': bananasImage,
    'inputId': 'bananas-amount',
    'price': 10,
    totalPrice: function(amount) {
      const newPrice = this.price * amount;
      return newPrice;
    }
  },
  {
    'title': 'Apples',
    'img': appleImage,
    'inputId': 'apples-amount',
    'price': 8,
    totalPrice: function(amount) {
      const newPrice = this.price * amount;
      return newPrice;
    }
  },
  {
    'title': 'Papayas',
    'img': papayaImage,
    'inputId': 'papayas-amount',
    'price': 10,
    totalPrice: function(amount) {
      const sale = (Math.floor(amount / 3)) * (this.price * 0.5);
      const newPrice = (this.price * amount) - sale;
      return newPrice;
    }
  }
];

export default Products;
