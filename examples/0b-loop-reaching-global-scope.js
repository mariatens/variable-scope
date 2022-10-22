"use strict";

console.log("Start of programme");

const fruitArr = ['apple', 'grape', 'pear'];
const stringSeparator = '-- PLUS --';

console.log("Entering my loop:");

for (let fruit of fruitArr) {
  console.log(fruit);
  console.log(stringSeparator); // globally scoped variable accessed inside the loop scope
}

console.log("Exited my loop!")

console.log("Reached the end of my programme!");