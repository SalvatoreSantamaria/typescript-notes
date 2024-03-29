/** Lexical this
 * Not a typescript feature
 * Shows how/why we can get 'this' errors in typescript 
 */

/** Readonly modifier

type PointExample = {
    readonly x: string // cannot modify x
    y: string         // y can still be modified
}
const myPointExample: PointExample = { x: 'a', y: 'b' }
myPointExample.x = 'something new after x was created'  //cant modify x

// also can't do this with classes
*/

/** Union Types - syntax looks like
function someFunction(input: number | string) {}

// Using a type alias instead
type numString = number | string
function someFunction2(input: numString) {}
*/

/** Literal Types- used specify variable types and will also show up in autocomplete 
let direction: 'North';
direction = 'North';
direction = 'cant use anything else here';

// More useful with union types
let someStatus: 0 | 5 | 10 | 20 // can extract into a named type alias like this: type someStatus = 0 | 5 | 10 | 20
someStatus = 22 //won't work!
 */

/** Type Narrowing 
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

/** Intersection types (uses type aliases)
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

/** Interfaces: alternate to type aliases (see above somePoint2D and somePoint3D example)

interface somePoint2D {
    x: number, 
    y: number
}

interface somePoint3D extends Point2D {
    z: number
}
*/

/** Optional modifier ?
type Person = {
    name: string,
    email?: string, // optional modifier. 
}

myperson.email is optional and can now be equal to undefined as well

 */

/** Non-null Assertion modifier !
 * looks like this !, and tells typescript that this is definitely not null
 * point!.x
 * 
 * But best to write code that doesn't need to use the Non-null Assertion modifier
 */

/** Interface Declaration merging 
 * merges together same-names interfaces into a single interface declaration
 * not supported by type aliases
*/

/** Types vs Interfaces - generally use types because more features
 * differences between these:
 * type aliases: Unions, Intersections (&), Primitives, Shorthand functions, Advanced Type Functions
 * interface: Declaration Merging, Familiarity (extends)
 */

/** Never type
 * Only something of type never can be assigned to type never
 */

