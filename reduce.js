  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExp);


// Grouping by a property, and totaling it too
// the result should be {Developer: 12, Designer: 4}
let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    }
    else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {}); // the last empty parantheses {} is the initial valud of acc
console.log(experienceByProfession);

// Grouping by a property
// the result should be {Developer: ['Andrew', 'Ariel], Designer: ['Michael', 'Kelly']}
let namesByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = [curr.name];
    }
    else {
        acc[key].push(curr.name);
    }
    return acc;
}, {}); // the last empty parantheses {} is the initial valud of acc
console.log(namesByProfession);

// filtering to only developers, we can also combine the following filter method with the previous reduce method
const developers = teamMembers.filter(m => m.profession === "Developer");
console.log("Developers:");
console.log(developers);