interface Named {
    readonly name?: string
    outputName?: string // It's optional property.
}

interface Greetable extends Named {
    greet(phrase: string): void
    welcome?(phrase: string): void // It's optional method.
}

class Person implements Greetable {
    name?: string
    // I can't use 'outputName' property because it's optional so 'Greetable' interface is not forcing me to use that.
    // Also I can't override 'welcome' method because it's optional.

    // Either I can use 'n' as optional like
    constructor(n?: string) {
        if (n) {
            this.name = n
        }
    }

    // Or I can use default variable like -
    // constructor(n?: string = '') {}

    greet(phrase: string): void {
        if (this.name) {
            console.log(phrase + ' ' + this.name)
        } else {
            console.log('Hi!!!')
        }
    }
}

const person: Greetable = new Person()
person.greet('Good morning') // Output: Hi!!!
