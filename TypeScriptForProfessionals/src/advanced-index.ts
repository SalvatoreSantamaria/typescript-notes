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

/** Assertion Functions
 * 
 * 
 * 
 *  */