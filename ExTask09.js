// Create an array of numbers.
// Use some() to check if any number in the array is even.
// Use every() to check if all numbers in the array are positive.

const numbers=[1,2,3,4,5,6,7,8,9,10];
let checker=numbers.some(num=>num%2===0);
console.log(checker);
let poschecker=numbers.every(num=>num>0);
console.log(poschecker);