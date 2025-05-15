/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Arrays without destructuring
let nums = [30, 26, 27];
let v1 = nums[0];
let v2 = nums[1];
let v3 = nums[2];
console.log(v1, v2, v3);

// Destructuring arrays
let chars = ['a', 'b', 'c'];
let [v4, v5, v6] = chars;
console.log(v4, v5, v6);

// Destructuring objects
let jobs = {
    mike: "designer",
    joe: "developer",
    alicia: "accountant"
};
let {mike, joe, alicia} = jobs;
console.log(mike, joe, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
let [, , maryNative, , marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french", 
    thirdLanguage: "spanish",
    fourthLanguage: "german"
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["orange", "apple", "banana", "peach", "cherry"];
let [fruit1, fruit2, ...other] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(other);

let favFood = {
    brian: "pizza", 
    anna: "pasta",
    sarah: "vegtarian",
    andrea: "steak"
};
let {brian, anna, ...rest} = favFood;
console.log(brian);
console.log(anna);
console.log(rest);