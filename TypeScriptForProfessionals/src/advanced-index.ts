/** Implements Keyword
    class Cat implements Animal {
        //if Cat doesn't have some Animal properties, then Typescript will give error
    }
*/

/** Definite Assignment Assertion 
 
let dice!: number; //1. without ! (! is the  Definite Assignment Assertion)
function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1)
}
rollDice()
console.log(('Current dice: ' + dice))//2. We get an error because TypeScript thinks dice might be undefined
*/ 

/** User Defined Type Guards
In real-life projects, you might want, to declare your own type guards with custom logic to help the TypeScript compiler determine the type. You will need to declare a function that serves as type guard using any logic you’d like. This function— User Defined Type Guard function — is a function that returns a type predicate in the form of event is MouseEvent in place of a return type:

function handle(event: any): event is MouseEvent {
    // body that returns boolean
}
If the function returns true, TypeScript will narrow the type to MouseEvent in any block guarded by a call to the function. In other words, the type will be more specific. event is MouseEvent ensures the compiler that the event passed into the Type Guard is in fact a MouseEvent. For example:

*/

/** Assertion Functions- mostly for tests (don't want to throw errors in prod, use type guards instead)
 * Special functions that assert something
 * function assert(condition: unknown, message: string): asserts condtion {
 * function assertDate(value: unknown): asserts value is Date {


type Person = { name: string, dateOfBirth?: Date };

function assert(condition: unknown, message: string) { //2. fix by adding return type of ': asserts condition' here
    if (!condition) {
        throw new Error(message);
    }
}
const maybePerson = loadPerson();
assert(maybePerson != null, 'Could not load person')
console.log('Name: ',  maybePerson.name) // 1. maybePerson has typescript error
*/


/** Function Overloading: 
You can have multiple functions with the same name but different parameter types and return type.
 
function makeDate(timestamp: number): Date; //overload
function makeDate(year: number, month: number, day: number): Date; //overload

function makeDate(timestampOrYear: number, month?: number, day?: number): Date { //actual function
  if (month != null && day != null) {
    return new Date(timestampOrYear, month - 1, day);
  } else {
    return new Date(timestampOrYear);
  }
}

const doomsday = makeDate(2000, 1, 1); // 1 Jan 2000
const epoch = makeDate(0); // 1 Jun 1970
 * 
 * 
 */


/** Call signatures
  lesson shows signature
 */


