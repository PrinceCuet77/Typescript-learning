// 'type' is flexible like - I can use 'union' inside the 'type'.
// 'interface' is clear like - I must use the properties like that way.
interface Greetable {
    // No implementation
    name: string

    greet(phrase: string): void
}

// 'Person' class must implement 'Greetable' interface.
class Person implements Greetable {
    name: string

    constructor(n: string) {
        this.name = n
    }

    // Override
    greet(phrase: string): void {
        console.log(phrase)
    }
}

// I can store an instance of 'Person' class in an interface type variable and class type variable.
// 'Greetable' type
const user1: Greetable = new Person('User1')
user1.greet('Good morning') // Output: Good morning
console.log(user1) // Output: Person { name: 'User1' }

// 'Person' type (by default)
const user2: Person = new Person('User2')
user2.greet('Good afternoon') // Output: Good afternoon
console.log(user2) // Output: Person { name: 'User2' }

// Note:
// Question: Why do I use interface with class?
// Answer: Interface forces a class to implement its methods and use its properties.

// A class can implement multiple interface like -
// class Person implement Greetable, AnotherGreetable {}
