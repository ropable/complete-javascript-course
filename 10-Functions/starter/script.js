'use strict';
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // Defaults (old ES5 method);
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  // Shortcut for instantiating an object.
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

const flightNum = 'LH123';
const ash = {
  name: 'Ashley',
  passport: 23423423,
  title: 'Mr',
};
console.log(ash);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(ash);
console.log(ash);

const oneWord = function (str) {
  // Takes in a string, replaces any spaces and returns as lower case.
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function accepting a function as an argument
const transformer = function (str, fn) {
  console.log(`Original: ${str}`);
  console.log(`Function: ${fn.name}`);
  console.log(`Transformed: ${fn(str)}`);
};
transformer('Hello world!', oneWord);
transformer('Hello world!', upperFirstWord);

const high5 = function () {
  console.log('✋');
};
// addEventListener is a higher order function, accepting a function as a callback.
document.body.addEventListener('click', high5);

// Function returning a function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greetHey = greet('Hey');
const greetHello = greetArrow('Hello');
greetHey('Ashley');
greetHello('Ashley');

const jetstar = {
  airline: 'Jetstar',
  iataCode: 'JS',
  bookings: [],
  // book function
  book(flightNum, name) {
    const str = `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`;
    this.bookings.push(str);
    console.log(str);
  },
};
jetstar.book('145', 'Ashley');

const qantas = {
  airline: 'Qantas',
  iataCode: 'QS',
  bookings: [],
};
// Copy the book method as a function.
const book = jetstar.book;

// This will NOT work:
// book(169, 'Fiona')
// We need to use the call() method, where the first argument represents `this`
book.call(qantas, 169, 'Fiona');

// The apply method exists, but is less commonly used.
book.apply(qantas, [169, 'Leah']);
// We can just use the call method, then the spread operator to unpack the arguments.
//
// Bind method is used to create a new function which has its `this` keyword set to the provided value.
// function.bind(thisArg, arg1, arg2, ...)
const bookQantas = book.bind(qantas);
bookQantas(169, 'Jamie');
// Bind allows additional arguments to be set:
const bookQantas169 = book.bind(qantas, 169);
bookQantas169('Steven');

// A partial application
const calcTax = (rate, value) => value + value * rate;
// Extend the partial application with a defined rate value.
const calcGST = calcTax.bind(null, 0.1);

console.log(calcGST(150));

// IIFE pattern:
(function () {
  console.log('This will not run again');
  const isPrivate = 42;
})();
// Alternative Arrow function pattern:
(() => console.log('This is also not run again'))();
