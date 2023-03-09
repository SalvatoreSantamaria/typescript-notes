// Net Ninja https://www.youtube.com/watch?v=AmpwfbdFYL8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=9

//This is a type alias
type StringOrNum = string | number

//1. Instead of this type in the function, we can use an alias
const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}
//1.1 Like this:
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }

//----------------------------------------------------------------

//2. We might use the same type repeatedly. You can make a type alias instead. 
const greet = (user: {name: string, uid: string | number}) => {
    console.log(`{$user.name} says hello`)
}

const greetAgain = (user: {name: string, uid: string | number}) => {
    console.log(`{$user.name} says hello`)
}

//2.1
type objectWithName = {name: string, uid: StringOrNum}
const greetAgain2 = (user: objectWithName) => {
    console.log(`{$user.name} says hello`)
}