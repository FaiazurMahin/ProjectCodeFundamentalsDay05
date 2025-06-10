// Create an array of colors: ["Red", "Green", "Blue", "Yellow", "Orange"].
// Use splice() to remove the second and third colors.
// Then, create a new array using slice() that extracts the elements from index 1 to 3 of the modified array.

const col=["Red","Green","Blue","Yellow","Orange"];
console.log(col);
col.splice(1,2,);  //splice modifies the original array
console.log(col);
let slicecol = col.slice(1,3);  //slice doesnt, so we gotta store it in another variable
console.log(slicecol);
