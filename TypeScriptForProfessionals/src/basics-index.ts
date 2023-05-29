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

//Arrays. All items of array must match type in type annotation
let someArray: number[] = [1,2,3];

//Tuple. Must match type in type annotation and length 
let tuple: [number, number, number] = [1,2,3]

//Object Types and Type Aliases. 
// Define and reuse types be using a type alias
//Here, Point is an alias
type Point = { x: number; y: number; z: number }
let center: Point = { x: 0, y: 0, z: 0, }
//The Alias is replacing:
//let center: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0}

//Functions. add() is returning a number
function add(a: number, b: number): number {return a + b}
//use type void if not returning anything
function log(message: string): void {}
//for the rest opearator, use like this:
function sum(...values: number[]) {}
//syntax for first class functions:
let add2: (a: number, b: number) => number; //function type
add2 = function add(a: number, b: number): number { return a + b }

//Structural Typing (Duck typing)
//If two types are the same either type can be used on a variable. 
type Point2D = {x: number, y: number}
type Point3D = {x: number, y: number, z: number}
let point2D: Point2D = {x: 0, y: 0}
let point3D: Point3D = {x: 0, y: 0, z: 0}
point2D = point3D //extra info ok
function takesPoint2D(point: Point2D) {}
takesPoint2D(point3D) //If one type has an additonal parameter types, that is ok. AKA duck typing

//Classes
class Animal {
    private name: string; //limited access
    constructor(name: string) { this.name = name; }

    public move(distance: number): void {
        console.log('Animal moved', distance)
    }
}
    let cat = new Animal('Cat');
    cat.move(10)
    cat.name = "Can't change this cause private"; //name is private


//can extend class
class Bird extends Animal {
    fly(distance: number): void {
        console.log(`${this.name} flew', distance`) // name is private, cannot be used in child class. Use protected instead of private in parent class to solve
    }
}

//Target Complier Option: see video
//Generics allow you to add type arguments that can be used to enforce a relationship between different members of a piece of code.
//https://www.w3schools.com/typescript/typescript_basic_generics.php

//Any and Unknown types
//any gives complete freedom
let exampleAny: any = 123 
let anySetBool: boolean = exampleAny.anything()
//any lets us do this:
let y: any
y.trim()
y.toFixed(2)
//unknown is similar, but it does not allow use as in an unsafe manner.
// typescript will tell you where it is in use
let x: unknown
unknown.trim()
unknown.toFixed(2)

//Type Assertions
//Tells the compiler what the type is without any type checks
let someString = load();
const trimmed = (someString as string).trim()// tells compiler this is a string
//Alternate Syntax (doesn't work in TSX files!)
const trimmed2 = (<string>someString).trim() // tells compiler this is a string

//Type Casting
//Typescript supports JavaScript type casting
let variable1;
variable1 = '123'
const number = +variable1 //+ coverts to a number

//Modules
//Works like JS Modules
//import * as utils from './utils';

//Type Declarations
//Declaring a variable that is not present in the typescript codebase
declare const process: any //type declaration
process.env.USER
