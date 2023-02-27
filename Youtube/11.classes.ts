class User {
    public email: string // 'Public'
    name: string // Nothing so automatic 'Public'
    private readonly city: string = 'Dhaka' // Only 'readonly' is not allowed to change the value of the variable but private can't allow to access this outside the class.

    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const user = new User('R@gmail.com', 'Rezoan')

// Professional person will do it like -
class Person {
    readonly city: string = 'CTG'
    constructor(
        public email: string,
        public name: string,
        private userId: string
    ) {}
}

const person = new Person('S@gmail.com', 'Shakil', 'Shakil77')

export {}
