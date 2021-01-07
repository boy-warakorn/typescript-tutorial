// const userName = "Max";
// let age = 30;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// Can't log
// console.log(isOld)

// const add = (a: number, b: number = 1): number => a + b;

// console.log(add(5, 8));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

// printOutput(add(1));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const notPerfectCopied = person;

notPerfectCopied.age = 20;

console.log(person);
console.log(notPerfectCopied);

const copiedPerson = { ...person };

const add = (...numbers: number[]) =>
  numbers.reduce((curResult, curValue) => curResult + curValue, 0);

// work with tuple
// const add = (...numbers: [number,number,number]) =>
//   numbers.reduce((curResult, curValue) => curResult + curValue, 0);

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;

console.log(hobby1, hobby2, remainingHobbies);

const { firstName: userName, age } = person;

console.log(userName, age, person);
