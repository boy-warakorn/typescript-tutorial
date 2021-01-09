// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // optional properties
}

// interface can extends many classes
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  // automaticly assume name to readonly
  constructor(public name?: string, public age?: number) {}

  greet(phrase?: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    }
    console.log("Hi");
  }
}

let user1: Greetable;

user1 = new Person();
user1 = new Person("Max");

user1.greet("Hi there - I am");

console.log(user1);
