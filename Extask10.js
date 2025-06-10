// Given an array of integers, perform the following operations:

// Multiply each integer by 3 using map().
// Filter out any results that are greater than 50 using filter().
// Sum the remaining values using reduce().

const numbah = [5,10,15,20,25];

let mul=numbah.map(num=>num*3);
console.log(mul);

let filtnumbah=mul.filter(num=>num<50);
console.log(filtnumbah);

let sum=filtnumbah.reduce((acc,num)=>num+acc,0);
console.log(sum);