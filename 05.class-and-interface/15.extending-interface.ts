interface Named {
    readonly name: string
}

// I can extend an interface into another interface.
interface Greetable extends Named {
    greet(phrase: string): void
}

// So, the 'Greetable' interface will look like -
// interface Greetable extends Named {
//     readonly name: string
//     greet(phrase: string): void
// }

// Note: I can also extend multiple interface into one interface but I can't extends multiple classes into one class like -
// interface Greetable extends Named1, Named2 {}

class Person implements Greetable {
    name: string // Automatically identify 'name' property is a readonly.

    constructor(n: string) {
        this.name = n
    }

    // Override
    greet(phrase: string): void {
        console.log(phrase)
    }
}

const user1: Greetable = new Person('User1')
user1.greet('Good morning') // Output: Good morning
console.log(user1) // Output: Person { name: 'User1' }

const user2: Person = new Person('User2')
user2.greet('Good afternoon') // Output: Good afternoon
console.log(user2) // Output: Person { name: 'User2' }
