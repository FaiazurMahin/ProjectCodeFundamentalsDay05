// Create an array of student objects, where each object has properties name and score.
// Use filter() to select only the students with scores greater than or equal to 60.
// Then, use map() to create an array of names of the passing students.

const student=[
    {name:"Imam",score:20},
    {name:"Ishrak",score:30},
    {name:"Deni",score:100},
    {name:"Mahin",score:95}
];

let filteredstudents = student.filter(selector=>selector.score>=60);
console.log(filteredstudents);

let passingstudents = filteredstudents.map(selectednames=>selectednames.name);
console.log([passingstudents]);