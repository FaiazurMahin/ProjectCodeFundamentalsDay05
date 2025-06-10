// Create an array of numbers.
// Use reduce() to calculate the sum of all elements in the array.

const num=[1,2,3,4,5,6,7,8,9,10];
let sum=num.reduce((acc,X)=>acc+X,0);
console.log(sum);