const numbers = [10, 20, 30, 40];
const result = numbers.find(num => num > 25);
console.log(result);

const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3) && arr.indexOf(3) === 2);

const numberss = [5, 10, 15, 20];
console.log(numberss.indexOf(15));
console.log(numberss.indexOf(25));

const numbersss = [1, 2, 3, 4, 5];
const results = numbersss.find(num => num % 2 === 0);
console.log(results);

//Write a function that finds "Banana" in an array and replaces it with "Grapes".

let fruits = ['A', 'B', 'C','Banana','D'];
fruits.splice(fruits.indexOf('Banana'),1, 'Grapes');
console.log(fruits);

// let bananafinder = indexOf('Banana');
// console.log(bananafinder);

//Given an array of numbers, return the sum of all even numbers using filter() and reduce().

let testno=[1,2,3,4,5];
let filt = testno.filter(X=>X%2===0);
console.log(filt);
let updatedfilt=filt.reduce((acc, X)=>acc+X,0);
console.log(updatedfilt); 