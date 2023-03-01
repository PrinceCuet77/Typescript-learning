// Question: Why should I use interface with class?
// Answer: Interface ensures that a class must use the property or method of its own.
interface Greetable {
    name: string

    greet(phrase: string): void
}

// I can implement multiple interface with class using comma like: class Person implements Interface1, Interface2 {}
class Person implements Greetable {
    name: string

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

// user1.greet('Hi there - I am') // Output: Hi there - I am Max
