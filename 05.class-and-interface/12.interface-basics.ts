// Describe an object should look like.
// I can use interface so that an object must have this property.
interface Person {
    // Capital leter is a convention.
    name: string
    age: number
    // dummyValue: string = 'Dummy' // I can't declare value

    greet(phrase: string): void // Just function signature otherwise will show an error
}

// Create an object of interface 'Person'
let user1: Person = {
    name: 'Max',
    age: 20,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    },
}

user1.greet('Hi there - I am') // Output: Hi there - I am Max
