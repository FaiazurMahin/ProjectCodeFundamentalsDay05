// 🧠 Practice Challenge: Library Management System
// You're building a system to manage books in a digital library.

// 🔹 a. Create the Data Structure
// Create an array named library.

// Each element should be an object representing a book with the following properties:

// title (string)

// author (string)

// pages (number)

// ratings (array of numbers)

// Add at least 4 books.

// 🔹 b. Add/Update Properties
// Add a new property available to each book (boolean).

// Update the pages of one specific book.

// 🔹 c. Loop and Display
// Use a loop to print each book’s title and its average rating (use reduce() to calculate average).

// Add this average rating as a new property (avgRating) to each book.

// 🔹 d. Filter and Map
// Create a new array of books with an average rating ≥ 4.0.

// From that, map an array of just their titles.

// 🔹 e. Summary
// Use reduce() to calculate the total number of pages in the library.

// Use some() to check if any book has a perfect rating (5).

// Use every() to check if all books have more than 100 pages.

// Let me know when you're done with a part — I'll help you review it!
// Good luck! 🚀📚

const library = [
    {title: "A", author: "AA",pages: 200 , ratings:[2,3,4]},
    {title: "B", author: "BB",pages: 300, ratings:[4,4,4]},
    {title: "C", author: "CC",pages: 400, ratings:[2,3,3]},
    {title: "D", author: "DD",pages: 500, ratings:[4,4,5]}
];

console.log(library);

library[0].available=false;
library[1].available=true;
library[2].available=false;
library[3].available=true;

library[3].pages=600;

console.log(library);

for(let books in library){
    console.log(library[books].title);
}
for(let books of library){
    let X = books.ratings.reduce((acc,X)=>X+acc,0)/books.ratings.length;
    books.avgRating=X;
    console.log("Average Rating: "+X)
}
console.log(library);

console.log("Filter part starts");

let Y = library.filter(X=>X.avgRating>=4);
console.log(Y);
let A = Y.map(X=>X.title);
console.log(A);

let totalpages = library.reduce((acc,X)=>X.pages+acc,0);
console.log(totalpages);

for(let books of library){
    let checksome=books.ratings.some(X=>X===5);
    console.log(checksome);
}

let pagecheker = library.every(P=>P.pages>100);
console.log(pagecheker);