// If I want to use an ‘abstract’ metod or property, then I need to add ‘abstract’ keyword before any class.

// Question: Why an ‘abstract’ class is used?
// Answer: An ‘abstract’ class is used to ensure all the sub-classes contain the same method or property.

// While extending an ‘abstract’ class (inheritance), I can my own functionalities and override the existing functionalities.

// According to Udemy Course: 'abstract' class & 'abstract' method but no 'abstract' property

abstract class Person {
    name: string
    abstract value: string // 'abstract' property

    constructor(name: string) {
        this.name = name
    }

    display(): void {
        console.log(this.name)
    }

    // An ‘abstract’ method is just the function signature.
    abstract find(name: string): Person
}

class Employee extends Person {
    empCode: number
    value: string // Must use that property because it's 'abstract'. otherwise showing an error.

    constructor(name: string, value: string, code: number) {
        super(name) // Must call super() which calls the 'Person' constructor.
        this.value = value
        this.empCode = code
    }

    // All the ‘abstract’ method must be implemented (overridden) inside the sub-class.
    find(name: string): Person {
        return new Employee(name, 'QA', 1)
    }
}

let emp: Person = new Employee('James', 'ENGINEER', 1000)
emp.display() // Output: James

let emp2: Person = emp.find('Steve')
console.log(emp2) // Output: Employee { name: 'Steve', value: 'QA', empCode: 1 }eve', empCode: 1 }
