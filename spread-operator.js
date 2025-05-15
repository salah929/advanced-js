/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
// the following block will crerate a new variable arr2 which points to the first variable arr1
// any changes on one of them will affect the second one also
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log( "first array", arr1);
console.log("second array", arr2);

// Copying an array
// the following block will create a copy (arr4) of the variable arr3
// these are separate variables, any changes to one of them will NOT affect the second one
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
console.log("third array", arr3);
console.log("fourth array", arr4);

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5};
console.log("first object", obj1);
console.log("second object", obj2);
console.log("third object", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, {...obj2, d:9}, ...arr3, 88, "x", "y", 99];
console.log("fifth array", arr5);