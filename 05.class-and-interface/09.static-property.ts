// I don't have to create an instance of class for 'static' property or method to access them.
// Warning: I can't use 'static' method or property in the non-static method.
class Person {
    constructor() {
        console.log('Constructor calling...')
    }

    static newInstance() {
        return new Person()
    }
}

const person = new Person()
console.log(person)

// Working same as before
const person1 = Person.newInstance()
console.log(person1)

// For both time, the output:
// Constructor calling...
// Person {}