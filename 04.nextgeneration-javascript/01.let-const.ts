let age = 20

console.log(isOk) // Output: undefined

if (age > 15) {
    var isOk = true
}

console.log(isOk) // Output: true

// But in the case of 'let' & 'const' as well.
let age2 = 20

// console.log(isOk2) // Produce an error.

let isOk2
if (age2 > 15) {
    isOk2 = true
}

console.log(isOk2) // Output: true

// Same condition is applicable inside the function.
