// Order is matters in tuples
let user: [string, number, boolean] = ['Prince', 11209, false]
console.log(user) // Output: [ 'Prince', 11209, false ]

// Creating type tuple
type User = [number, string]
const myUser: User = [112, 'ABC']
console.log(myUser) // Output: [ 112, 'ABC' ]

// Update tuple element
myUser[1] = 'RSP'
console.log(myUser) // Output: [ 112, 'RSP' ]

export {}
