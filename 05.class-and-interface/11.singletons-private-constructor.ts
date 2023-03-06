// The Singletons pattern is ensuring that I always have only one instance of a certain class.
// Basically, I want to create only one object of an class instead of using multiple object based of an class.

class Person {
    private static instance: Person

    private constructor(public name: string) {
        console.log('Constructor calling...')
    }

    static getInstance() {
        if (this.instance) {
            // ‘this’ keyword is indicating 'Person' or I can use like Person.instance
            return this.instance
        } else {
            return new Person('Prince')
        }
    }
}

// Can't use this
// const person = new Person()

const person1 = Person.getInstance()
console.log(person1)
// Output:
// Constructor calling...
// Person { name: 'Prince' }

const person2 = Person.getInstance()
console.log(person2)
// Output:
// Constructor calling...
// Person { name: 'Prince' }

if (person1 == person2) {
    console.log('Same')
} else {
    console.log('Not same') // Output: Not same
}
