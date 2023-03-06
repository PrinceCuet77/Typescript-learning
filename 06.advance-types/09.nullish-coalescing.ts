// Example: 01
let userInput = null

// Checks if 'userInput' is 'null' or 'undefined' then sets provided default value otherwise set what contains in 'userInput'
let storedData = userInput || 'DEFAULT'
console.log(storedData) // Output: DEFAULT

// Example: 02 -> Loophole
let userInput1 = ''
storedData = userInput1 || 'DEFAULT' // Contains 'A' value so not 'DEFAULT'
console.log(storedData) // Output: DEFAULT

// Example: 03 -> Solving loophole
// But it's not 'null' or 'undefined'. So, I need nullish coalescing.
storedData = userInput1 ?? 'DEFAULT'
console.log(storedData) // Output: ''

// Example: 04
storedData = userInput ?? 'DEFAULT'
console.log(storedData) // Output: DEFAULT
