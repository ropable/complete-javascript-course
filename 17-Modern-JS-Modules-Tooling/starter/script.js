//import { addToCart, totalCost, shippingCost } from './shoppingCart.js';
console.log('Importing module');

// addToCart('beans', 5);
// console.log(totalCost, shippingCost);

// Import everything at once, in a namespace.
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 2);
console.log(ShoppingCart.totalCost);
