// 🧠 Practice Challenge: Student Management System
// You're tasked with building a basic system to manage students' data in a class. Use arrays, objects, and the methods you've learned.

// a. Create the data structure
// Create an array named students, where each element is an object representing a student. Each student should have the following properties:

// name (string)

// age (number)

// scores (array of numbers, e.g., [80, 75, 90])

// Create at least 4 student objects.

// b. Access and modify data
// Add a new property email to each student (you can make up the email).

// Update the age of the student named "Alice" to 23.

// c. Loop and display
// Use a for...in or for...of loop to display each student’s:

// Name

// Average score (you’ll need to use reduce() on the scores array to compute this)

// d. Use array methods
// Create a new array of only the students whose average score is 80 or above using filter() and reduce().

// From that filtered list, create another array of just their names using map().

// e. Summary calculation
// Use reduce() to calculate the total number of scores across all students (sum of lengths of all scores arrays).

// Use some() to check if any student has a perfect score (100).

// Use every() to check if all students are aged 18 or above.

//a
const students = [
    {name:"Ave", age:100, scores:[50,52,54]},
    {name:"Mirai", age:110, scores:[92,94,96]},
    {name:"Alice", age:120, scores:[55,57,59]},
    {name:"Delete", age:130, scores:[100,100,100]}
]

students[0].email="abc@gmail.com"
students[1].email="def@gmail.com"
students[2].email="ghi@gmail.com"
students[3].email="jkl@gmail.com"

students[2].age = 23;

console.log(students);

for (let index in students){
    console.log("Name: "+students[index].name);
    
}
//or
// students.forEach(X=>console.log("Names: "+X.name));
for (let student of students){
    let average =  student.scores.reduce((acc,totalscore)=>totalscore+acc,0)/student.scores.length;  
    student.Average = average;
    console.log(student.name+"'s average score: "+average);
    }

// let filt = students.filter(X=>X.Average>=80);
// console.log(filt);

let passedstuds = [];
for (let student of students){
    if(student.Average>=80){
        passedstuds.push(student.name);
    }
}
console.log(students);
console.log(passedstuds);

let filt = students.filter(X=>X.Average>=80);
console.log(filt);
let passednames = filt.map(Y=>Y.name);
console.log(passednames);

// for (let student of students){
//     let grandtotal = student.scores.reduce((sum,(student.scores.reduce((acc,pointer)=>pointer+acc,0)))=>(student.scores.reduce((acc,pointer)=>pointer+acc,0))+sum,0);
//     console.log(grandtotal);
// }


let grandtotal= students.reduce((sum,student)=>
    (student.scores.reduce((acc,score)=>score+acc,0))+sum,0);
console.log(grandtotal);

let checker=students.some(student=>student.scores.includes(100));
console.log(checker);
let agechecker = students.every(X=>X.age>18);
console.log(agechecker);