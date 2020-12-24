console.log('hello world')

// Setting Types ********************************************************************************************

let lucky = 23; //setting to a number
// let lucky: number = 23 //dont need this, because it is redundant
lucky = '23' //error, lucky is not a string

//shouldnt really do this, but can
let anyLucky: any = 23; //setting to any type
anyLucky = "23" //works because of any up above

let luckyAnyType //defaults to any type 

// Custom Type Enforcement **********************************************************************************
type Style = 'bold' | 'italic' | 23;
let font: Style;
font = 'can only be set now to bold or italic'

// Strong Typing: Object Type Enforcement 

interface Dog {
  first: string;
  last: string;
  // [key: string]: any // uncomment to allow additional properties.
}

const dog: Dog = {
  first: "Kuma",
  last: "Dog"
}

const dog2: Dog = {
  first: 'Mona',
  last: true, //not allowed because object is enforced!
  tires: 4 // not allowed! because only two properties are allowed!
}

// Strong Typing: Function Type Enforcement 