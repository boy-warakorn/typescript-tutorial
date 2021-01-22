import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
  { title: "A Doll" },
];

// const p1 = new Product("A Book", 12.99);

const loadedProducts = plainToClass(Product, products);

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS");
  } else {
    console.log(newProd.getInformation());
  }
});

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
