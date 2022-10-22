"use strict";

const myString = 'testing out variable scope';
const words = myString.split(' ');

console.log('Entering my loop:');

for (let word of words) {
  const capitalisedWord = word.toUpperCase();
  console.log('I shout:', capitalisedWord);
}

console.log('Loop exited!')

// below will cause errors - comment out to fix
//console.log("outside a loop, can I access word?", word); //no
//console.log("outside a loop, can I access capitalisedWord?", capitalisedWord); //no  
console.log(myString)
console.log(words)

console.log("Reached the end of my programme!");