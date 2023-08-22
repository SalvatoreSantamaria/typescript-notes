The TypeScript compiler can be configured in the tsconfig.json file. The compiler options are documented here: https://www.typescriptlang.org/docs/handbook/compiler-options.html

TypeScript can be implicit or explictly typed:
```typescript
let a = 1; // implicit
let b: number = 2; // explicit
```

TypeScript has special types:
```typescript
let a: any = 1; // any type
let b: unknown = 2; // unknown type
let c: void = undefined; // void type
let d: never = (() => { throw new Error('error') })(); // never type
```

Using readonly to prevent a property from being changed:
```typescript
interface Person {
    readonly name: string;
    age: number;
}
```

Using readonly to prevent an array from being changed:
```typescript
let a: readonly number[] = [1, 2, 3];
```

Tuples are arrays with a fixed number of elements, the order of the elements is fixed (it matters), and the types of the elements are known:
```typescript
let a: [number, string] = [1, 'a'];
```

Use object types like this:
```typescript
let a: { name: string, age: number } = { name: 'a', age: 1 };
```

Optional object property (age is optional):
```typescript
let a: { name: string, age?: number } = { name: 'a' };
```

Typescript Enums:
```typescript
enum Color {
    Red,
    Green,
    Blue
}
let a: Color = Color.Red;
```

Type Aliases:
```typescript
type Age = number;
let a: Age = 1;
```

Type Aliases with Generics:
```typescript
type Age<T> = T;
let a: Age<number> = 1;
```

Type Aliases with Union Types:
```typescript
type Age = number | string;
let a: Age = 1;
let b: Age = 'a';
```

Type Aliases with Intersection Types:
```typescript
type Age = number & string;
let a: Age = 1;
let b: Age = 'a';
```

Type Aliases with Function Types:
```typescript
type Age = (a: number) => number;
let a: Age = (a) => a;
```

Type Aliases with Object Types:
```typescript
type Age = { name: string, age: number };
let a: Age = { name: 'a', age: 1 };
```

Type Aliases with Tuple Types:
```typescript
type Age = [number, string];
let a: Age = [1, 'a'];
```

Type Aliases with Literal Types:
```typescript
type Age = 1;
let a: Age = 1;
```

Type Aliases with Type Guards:
```typescript
type Age = number;
let a: Age = 1;

if (typeof a === 'number') {
    console.log('a is a number');
}
```

Type Aliases with Type Casting:
```typescript
type Age = number;
let a: Age = 1;
let b = a as number;
```

Type Aliases with Type Assertions:
```typescript
type Age = number;
let a: Age = 1;
let b = <number>a;
```

Type Aliases with Type Inference:
```typescript
type Age = number;
let a: Age = 1;
let b = a;
```

Type interfaces:
```typescript
interface Age {
    name: string;
    age: number;
}
let a: Age = { name: 'a', age: 1 };
```

Type interfaces with optional properties:
```typescript
interface Age {
    name: string;
    age?: number;
}
let a: Age = { name: 'a' };
```

Type interfaces with readonly properties:
```typescript
interface Age {
    readonly name: string;
    age: number;
}
let a: Age = { name: 'a', age: 1 };
```

Extending interfaces:
```typescript
interface Age {
    name: string;
    age: number;
}
interface Age2 extends Age {
    name2: string;
}
let a: Age2 = { name: 'a', age: 1, name2: 'a2' };
```

Typescript casting:
```typescript
let a: any = 1;
let b = a as number; //as is the casting operator
```

Typescript casting with angle brackets:
```typescript
let a: any = 1;
let b = <number>a; //angle brackets are the casting operator
```

Typescript Utility Types:
```typescript
type Age = {
    name: string;
    age: number;
}
type Age2 = Partial<Age>; // makes all properties optional
type Age3 = Required<Age>; // makes all properties required
type Age4 = Readonly<Age>; // makes all properties readonly
type Age5 = Pick<Age, 'name'>; // picks the properties you want
type Age6 = Omit<Age, 'name'>; // omits the properties you don't want
type Age7 = Exclude<number | string, string>; // excludes the types you don't want
type Age8 = Extract<number | string, string>; // extracts the types you want
type Age9 = NonNullable<number | null | undefined>; // removes null and undefined from the type
type Age10 = ReturnType<() => number>; // gets the return type of a function
type Age11 = InstanceType<typeof Age>; // gets the instance type of a class
```

Typescript Generics:
```typescript
function a<T>(a: T): T {
    return a;
}
let b = a<number>(1);
```

