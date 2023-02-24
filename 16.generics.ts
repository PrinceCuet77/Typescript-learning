const score: Array<number> = []
const names: Array<string> = []

// Takes either 'boolean' or 'number' and return either 'boolean' or 'number'
function identityOne(val: boolean | number): boolean | number {
    return val
}

// Calling
console.log(identityOne(1)) // Output: 1
console.log(identityOne(false)) // Output: false

// Not a good practice
function identityTwo(val: any): any {
    return val
}

// using generics
function identityThree<Type>(val: Type): Type {
    return val
}

console.log(identityThree('Prince')) // Output: Prince
console.log(identityThree(4)) // Output: 4

// using generics shortcut
function identityFour<T>(val: T): T {
    return val
}

interface Bootle {
    brand: string
    type: number
}

// identityFour<Bootle>({})

// Generics in function with array and arrow function
function getSearchProducts<T>(products: T[]): T {
    // Do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // Do some database operations
    const myIndex = 3
    return products[myIndex]
}

// <T,> - Extra comma is for indicating that it's not a JSX syntax (Used in React JS)
// const getMoreSearchProducts2 = <T,>(products: T[]): T => {
//     // Do some database operations
//     const myIndex = 3
//     return products[myIndex]
// }

function demo<T, U>(valOne: T, valTwo: U): object {
    return { valOne, valTwo }
}

console.log(demo(3, '4')) // Output: { valOne: 3, valTwo: '4' }

function demo1<T, U extends number>(valOne: T, valTwo: U): object {
    return { valOne, valTwo }
}

// ----------------------------------------
interface Quiz {
    name: string
    type: string
}

interface Course {}

console.log(demo1(3, 4.6)) // Output: { valOne: 3, valTwo: 4.6 }

export {}
