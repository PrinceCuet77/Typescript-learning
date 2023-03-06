type Combinable = string | number
type Numeric = number | boolean

// Function overloading: Declaring the combination of that 'add' function.
function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString()
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
}

const result = add('Hello', ' World')
console.log(result) // Output: Hello World

const result1 = add(1, 2)
console.log(result1) // Output: 3
