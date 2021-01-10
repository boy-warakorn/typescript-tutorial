//const names: Array<string> = ["Max", "Manuel"];  string[]
//names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 500);
// });

// promise.then((data) => {
//   console.log(data);
// });

// --Generic Function--

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj1 = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
const mergedObj2 = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj1.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["ASdads", "asdasd"]));
console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Manu");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Max" };

// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Manu" });

// objStorage.removeItem(maxObj);

// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];

// Test advanced Generics Class

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "";
}

class Animal {
  numLegs: number = 6;
}

class Bee extends Animal {
  keeper: BeeKeeper = { hasMask: false };
}

class Lion extends Animal {
  keeper: ZooKeeper = { nametag: "" };
}

function createInstance<A extends Animal>(c: new () => A) {
  return new c();
}

console.log((createInstance(Lion).keeper.nametag = "ads"));

createInstance(Bee).keeper.hasMask;

function create<T>(c: new () => T): T {
  return new c();
}

const obj = new Lion();
console.log(obj);

const obj2 = create(Lion);
console.log(obj2);
