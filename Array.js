// Creating and Printing an array
const array = [1,2,3,4,5]
console.log(array)

let fruits=["Apple","Banana","Mango","Grapes","Strawberry"]
console.log(fruits);


//Array.push, pushes element to the end of array and unshift pushes elemt to the start of the array
const numbah=[1,2,3,4,5];
numbah.push(5);
numbah.unshift("Array Startoo - ");
console.log(numbah);


//Pop is opposite of push and shift is opposite of unshift; basically pulls out of array
let games=["LeagueofLegends","GenshinImpact","WUtheringWaves","SololevellingArise","StarRail","Mlbb"];
console.log(games);
games.pop();
games.shift();
console.log(games);

//Splice and slice
//x.splice(2,4,"new") - start from index 2, remove 4 index from there, insert "new" in index 2
//basically deletion and insertion of elements
let colors = ['Red','Green','Blue','Purple','Yellow','White','Black'];
console.log(colors);
// colors.splice(1,3,"New element entrance");
// console.log(colors);
colors.splice(2,4,"New element entrance");
console.log(colors);

//x.slice(X,Y) -- start at X, end before Y
// lets say, arr=[1,2,3,4,5,6]; arr.slice(1,3) = 2,3
let slicecolors = colors.slice(0,2);
console.log(slicecolors);