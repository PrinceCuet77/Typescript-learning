# Typescript learning

- [Typescript learning](#typescript-learning)
  - [What is typescript?](#what-is-typescript)
  - [Advantages of Typescript](#advantages-of-typescript)
  - [Typescript Basics: Basic Types](#typescript-basics-basic-types)
    - [Using Types](#using-types)

## What is typescript?

- A JavaScript superset
- A language building up on JavaScript
- Adds new features + Advantages to JavaScript
- But browser can't execute it
- It's power compiler to compile TypeScript code to Javascript

Installing typescript using npm (terminal globally):

```
sudo npm install -g typescript
```

Checking the version of typescript:

```
tsc --version
```

- I need to import JavaScript in the HTML file
- Same name as Typescript file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project</title>
    <link rel="stylesheet" href="app.css" />
    <script src="dist/app.js" defer></script>
  </head>
  <body></body>
</html>
```

- File structure:

```sh
- file.html
- app.ts
- app.js
```

## Advantages of Typescript

- TypeScript adds types
- Next-gen JavaScript features (compiled down for older browsers)
- Non-JavaScript features like Interfaces or Generics
- Meta-Programming features like Decorators
- Rich configurtion options
- Modern tooling that helps even in non-typescript projects

## Typescript Basics: Basic Types

### Using Types

Core types:

- number `1`, `5.3`, `-10`
- string `'Hi'`, `"Hi"`
- boolean `true`, `false`
- object `{ age: 30 }`
- array `[1, 2, 3]`
- tuple `[2, 'value']`
- enum `{NEW, OLD}`
- any

TypeScript's type system only helps during development (i.e. before the code gets compiled)

The key difference is: JavaScript uses 'dynamic types' (resolved at runtime), TypeScript uses 'static types' (set during development)

Initialization and declaration in the same line

```ts
const num1: number = 5
const name: string = 'Prince'
const flag: boolean = false
```

Initialization and declaration in the different line

```ts
const num1: number
num1 = 5
```

Object

```ts
const person: {
  name: string
  age: number
} = {
  name: 'Prince',
  age: 22,
}

// Accessing the property
person.name
```

Array

```ts
const num1: number[] = [1, 2, 3]

// Mixed array (If I don't declare + initialize then must declare 'let')
let mixed: any[]
mixed = [1, 'any']

// Used inside an object
const person: {
  name: string
  age: number
  hobbies: string[]
} = {
  name: 'Prince',
  age: 22,
  hobbies: ['Watching TV', 'Biking'],
}
```

Tuple:

- Order matters
- Fixed length array

```ts
const tupleValue: [number, string] = [1, 'P']
console.log(tupleValue)

const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string]
} = {
  name: 'Prince',
  age: 22,
  hobbies: ['Watching TV', 'Biking'],
  role: [1, 'SE'],
}
```

Enum:

- Automatically enumerated global constant identifiers
- Custom type
- Convention: first letter capital

```ts
enum Role {
  SE,
  SSE,
  PSE,
  PM,
}

console.log(Role.SE) // 0
console.log(Role.SSE) // 1
```

- Enum starts with 0 value
- If I want to start with custom value

```ts
enum Role {
  SE = 5,
  SSE,
  PSE,
  PM,
}

console.log(Role.SE) // 5
console.log(Role.SSE) // 6
```

- Customize all the enum value

```ts
enum Role {
  SE = 5,
  SSE,
  PSE = 'Principle Software Engineer',
  PM,
}
```

Any:

- stores all types of data on it

```ts
const val: any = 'val'
const num: any = 3
```

Union Type:

- I can use more than one data types in one variable

```ts
function combine(input1: number | string, input2: number | string) {
  if (typeof input1 === 'number' && typeof input2 === 'number')
    return input1 + input2
  else return input1.toString() + input2.toString()
}

const combineAges = combine(30, 24) // 54
const combineNames = combine('Max', 'Anna') // MaxAnna
```

Literal Type:

- Very clear which value it should hold
- If `string` then `+` convert it into `number` type

```ts
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' // Literal type
) {
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    console.log('a')
    return +input1 + +input2
  } else {
    return input1.toString() + input2.toString()
  }
}

const combineAges = combine(30, 24, 'as-number') // 54
const combineAgesString = combine('30', '24', 'as-number') // 54
const combineNames = combine('Max', 'Anna', 'as-text') // MaxAnna
```

Type Alias

```ts
type Combineable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
  input1: Combineable, // Alias
  input2: Combineable,
  resultConversion: ConversionDescriptor // Literal type
) {
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    return +input1 + +input2
  } else {
    return input1.toString() + input2.toString()
  }
}

const combineAges = combine(30, 24, 'as-number') // 54
const combineAgesString = combine('30', '24', 'as-number') // 54
const combineNames = combine('Max', 'Anna', 'as-text') // MaxAnna
```
