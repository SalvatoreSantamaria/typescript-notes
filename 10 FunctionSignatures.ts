// Function signatures describe the general structure of a function: what args it takes and what data it returns
// example: () => void // this takes no args and return void.


// example: the greets function has to follow this structure:
let greets: (a: string, b: string) => void;
greets = (name: string, greeting: string) => { //don't have to be named a and b
    console.log(name, greeting);
}

//another example returning a number
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => { 
    if (action == "add") {
         return numOne + numTwo;
    } else { return numOne - numTwo; }
}

//another example with an object in the function
let someLogDetails: (obj: {name: string, age: number}) => void;
someLogDetails = (someObject: {name: string, age: number}) => {
    console.log(someObject.name + ": " + someObject.age)
}