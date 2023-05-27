const person: {
  name: string
  age: number
  hobbies: string[]
} = {
  name: 'Prince',
  age: 22,
  hobbies: ['Watching TV', 'Biking'],
}

console.log(person.hobbies)

const num1: number[] = [1, 2, 3]

// Mixed array (If I don't declare + initialize then must declare 'let')
let mixed: any[]
mixed = [1, 'any']
console.log(num1)
console.log(mixed)

const tupleValue: [number, string] = [1, 'P']
console.log(tupleValue)

enum Role {
  SE = 4,
  SSE,
  PSE,
  PM,
}
console.log(Role.SE)

const val: any = 'val'
const num: any = 3

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

const combineAges = combine(30, 24, 'as-number')
console.log(combineAges)

const combineAgesString = combine('30', '24', 'as-number')
console.log(combineAgesString)

const combineNames = combine('Max', 'Anna', 'as-text')
console.log(combineNames)
