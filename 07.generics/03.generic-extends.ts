function merge2<T, U>(objA: T, objB: U) {
    return { ...objA, ...objB }
}

const mergedObj2 = merge2({ name: 'Max', hobbies: ['Sports'] }, 30)
console.log(mergedObj2) // Output: { name: 'Max', hobbies: [ 'Sports' ] }

// Question: Where is my '30' (second parameter)?
// Answer: 'merge2' function takes '30' as 'objB' but 'objB' is not an object. So, it can't merge.

// 'U' means any kind of data type can be assign.

// I can restrict to use any kind of data type using 'extends' keyword. For example: (Use only 'object' data type)

function merge3<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB }
}

const mergedObj3 = merge3({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
console.log(mergedObj3) // Output: { name: 'Max', hobbies: [ 'Sports' ], age: 30 }

// This constraints can be anything like:
// - Extend object type like: <T extends object>
// - Extend string type like: <T extends string>
// - Extend Person type like: <T extends Person>
// - Extend union types like: <T extends string | number>

// It removes any unnecessary behavior