let message: string = 'Hello world';
console.log(message)

// Typescript Primitive Types:
let isPresent: boolean = false;
let magic: number = 123
let hello: string = 'world'
let noDefined: undefined = undefined
let notPresent: null = null
let penta: symbol = Symbol('star') //symbol is for global unique identifier
let biggy: bigint = 24n; //bigint is for large numbers

//Typescript Intstance Types:
let regexp: RegExp = new RegExp('ab+c')
let array: Array<number> = [1,2,3]
let set: Set<number> = new Set([1,2,3])
// Custom
class Queue<T> { /** Code here */ }
let queue: Queue<number> = new Queue()