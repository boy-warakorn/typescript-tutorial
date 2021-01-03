// const person: {
//   name: string;
//   age: number;
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  author = "author",
  admin = 100,
  read_only = "read_only",
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.read_only,
};

// console.log(Role.admin);

// Typescript cannot check push
// person.role.push("ss");

// person.role = [0,"admin","user"]

const someText = ["asdasd", "adads", "as"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(favoriteActivities);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role == Role.read_only) console.log("I'm readonly");
