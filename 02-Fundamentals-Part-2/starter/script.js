"use strict";

// Reserved word, won't work with strict mode.
// const private = 123;

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log("I can drive");
}

// Function declaration:
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
}

function cutFruitPieces(fruit) {
  return fruit * 4;
}

let juice = fruitProcessor(2, 1);
console.log(juice);

// Function expression
const calcAge1 = function (birthYear) {
  year = new Date().getFullYear();
  return year - birthYear;
};

// Arrow function expression
const calcAge2 = (birthYear) => new Date().getFullYear() - birthYear;

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Arrays

const people = ["Michael", "Peter", "Steven"];
const numbers = new Array(1, 2, 3, 4, 5);
/* Useful array functions:
 * each
 * length
 * push
 * pop
 * unshift
 * shift
 * indexOf
 * forEach
 * includes (checks with strict equality)
 */

const ash = {
  firstName: "Ashley",
  surname: "Felton",
  birthYear: "1978",
  // Object methods need to use a function expression:
  calcAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },
};
// Bracket notation:
console.log(ash["firstName"]);
// Dot notation
console.log(ash.surname);

// for loop:
for (let step = 0; step < 10; step++) {
  console.log(`Step ${step}`);
}

// Looping an array by generating an iterator:
for (let i of people.values()) {
  console.log(i);
}
