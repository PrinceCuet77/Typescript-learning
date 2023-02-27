// Merge two objects and make a new object.
// 'T' -> first generic type
// 'U' -> second generic type

function merge<T, U>(objA: T, objB: U) {
    // return Object.assign(objA, objB)
    return { ...objA, ...objB }
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
console.log(mergedObj) // Output: { name: 'Max', hobbies: [ 'Sports' ], age: 30 }
console.log(mergedObj.age)
