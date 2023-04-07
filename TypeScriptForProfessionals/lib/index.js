"use strict";
let message = 'Hello world';
console.log(message);
// Typescript Primitive Types:
let isPresent = false;
let magic = 123;
let hello = 'world';
let noDefined = undefined;
let notPresent = null;
let penta = Symbol('star'); //symbol is for global unique identifier
let biggy = 24n; //bigint is for large numbers
//Typescript Intstance Types:
let regexp = new RegExp('ab+c');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
// Custom
class Queue {
}
let queue = new Queue();
