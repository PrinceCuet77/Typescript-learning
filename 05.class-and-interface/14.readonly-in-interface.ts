interface Greetable {
    readonly name: string // Must set only for once.

    greet(phrase: string): void
}

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
