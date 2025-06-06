/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(5, 4);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
    // Code block
    return a + b;
}
let sum2 = addTwoNumbers2(5, 6);
console.log(sum2);

// Single Line Arrow Function With Parameters, used for simple one line logic
const addTwoNumbers3 = (a, b) => a + b;
// const addTwoNumbers3 = (a, b) => (a + b); // this is also valid
let sum3 = addTwoNumbers3(7, 6);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message); // one parameter does need a parantheses
saySomething("Hello World!");

const sayHello = () => console.log("Hello!"); // no parameters >> empty parantheses
saySomething("Hello World!");

// Returning Multiple Lines
const returnMultipleLines = () => (
    `Hi.
    This is a muliple line output.
    Thanks.`
)
console.log(returnMultipleLines());