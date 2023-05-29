// missing lexical this
// missing readonly modifier

/* Union Types - syntax looks like
function someFunction(input: number | string) {}

// Using a type alias instead
type numString = number | string
function someFunction2(input: numString) {}
*/

/* Literal Types- used specify variable types and will also show up in autocomplete 
let direction: 'North';
direction = 'North';
direction = 'cant use anything else here';

// More useful with union types
let someStatus: 0 | 5 | 10 | 20 // can extract into a named type alias like this: type someStatus = 0 | 5 | 10 | 20
someStatus = 22 //won't work!
 */

/* Type Narrowing 
Type narrowing is just what it sounds like—narrowing down a general type into something more precise. 
If you've ever dealt with union types, e.g. string | number you've certainly encountered this. 
In fact, optional types such as x?: number often require narrowing as well, as this typing is equivalent to x: number | undefined. 
In both of these cases, you'll likely need to handle each case in your code, and for that you'll need to narrow down the type first.

Uses instanceOf but cannot use instanceOf for custom classes
*/


/** Discriminated Unions

type Circle = {
    isValid: boolean, // <-- could also use a boolean for discriming
    kind: 'circle', // <-- Discriminating
    size: number
}

type Square = {
    kind: 'square', // <--
    size: number
}

type Rectangle = {
    kind: 'rectangle', // <--
    width: number,
    height: number
}

type Shape = Square | Rectangle | Circle

function area(shape: Shape) {
    if (shape.kind === 'square') { //...
    }
}

*/

/** Class Parameter Properties

// Without Class Parameter Properties
class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// With Class Parameter Properties
class Person {
    constructor(
        public name: string, 
        public age: number) {
    }
}

const adam = new Person('Adam', 120000);
console.log(adam.name, adam.age); // 'Adam', 120000
 */

/** Strict Complier Option
See tsconfig.json "strict": true and it's suboptions
*/ 

/** Null vs Undefined
 * typescript has a lot of under the hood here. Use null checks.

function example(value: string | null) {
    // either do value?.toLocaleLowerCase()
    // or 
    // if (value === null) {
    //     return value
    // }

    return value.toLocaleLowerCase() //<-- typescript 'value is possibly null
}
 */

/** Intersection types
 * Combine features of multiple types into one


//Separate type 1
type somePoint2D = {
    x: number,
    y: number,
}

//Separate type 2
type somePoint3D = {
    x: number, // <-- can combine
    y: number, // <-- can combine
    z: number
}

type somePoint3D = Point2D & { // <-- Type Intersection
    z: number
}

// Can combine like this too: 
type combinePointType = 
  & somePoint2D
  & somePoint3D;

*/

