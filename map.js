  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop


// Using map()


// Simplified w/ map()


// Simplfied w/ map() + arrow function
let nums = [1, 2, 3, 4, 5];
const double = nums.map(num => num * 2);
console.log(double);
const x1 = nums.map(num => [num, num * 2]);
console.log(x1);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// result: array of arrays
// [ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ]
const students1 = students.map(student => [student.name, student.id]);
console.log(students1);

// result: array of objects
// [ { name: 'Mark', id: 1 }, { name: 'Ariel', id: 2 }, { name: 'Jason', id: 3 } ]
const students2 = students.map(({name, id}) => ({name, id}));
console.log(students2);

// result: array of objects with new property (random age between 18 and 60)
// [ { name: 'Mark', id: 1, age: 33 }, { name: 'Ariel', id: 2, age: 44 }, { name: 'Jason', id: 3, age: 55 } ]
const students3 = students.map(student => ({...student, age: Math.floor(Math.random() * (60 - 18 + 1)) + 18}));
console.log(students3);
