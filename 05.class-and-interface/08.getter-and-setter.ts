class Person {
    constructor(private username: string, private password: string) {}

    // Setter & Getter method
    setUsername(un: string) {
        this.username = un
    }

    getUsername() {
        return this.username
    }

    // Standard Setter & Getter method
    set setPassword(pw: string) {
        this.password = pw
    }

    get getPassword() {
        return this.password
    }
}

const person = new Person('Prince', '12345')
console.log(person) // Output: Person { username: 'Prince', password: '12345' }

person.setUsername('Prince77')
console.log('Username: ' + person.getUsername()) // Output: Username: Prince77
console.log(person) // Output: Person { username: 'Prince77', password: '12345' }

// Standard way
person.setPassword = '12_45'
console.log('Password is changed. Now: ' + person.getPassword) // Output: Password is changed. Now: 12_45
console.log(person) // Output: Person { username: 'Prince77', password: '12_45' }

// Must run using: tsc --target es6 08.getter-and-setter.ts
