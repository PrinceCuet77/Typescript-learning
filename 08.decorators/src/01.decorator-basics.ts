// TODO:
// In the terminal: tsc --init
// In the 'tsconfig.json' file, uncomment '"experimentalDecorators": true' and save it otherwise decorator is not working.

// Decorator is just a function
function Logger(constructor: Function) {
    console.log('Logging...')
    console.log(constructor)
}

// '@' and function -> indicates that it should be an decorator function
// Gets the output from the decorator first. Because decorator is called when the 'Person' class is defined (class defination) not instanced (new Person() time).
@Logger
class Person {
    name = 'Max'

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person()
console.log(pers)
// Output:
// Logging...
// [class Person]
// Creating person object...
// Person { name: 'Max' }
