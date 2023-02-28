class Department {
    name: string

    constructor(n: string) {
        this.name = n
    }

    describe() {
        console.log('Department: ' + this.name) // 'this' keyword indicates the class reference.
    }

    // Also do that. Specify 'this' keyword as 'Department' which is indicating by default.
    anotherDescribe(this: Department) {
        console.log('Department (anotherDescribe): ' + this.name) // 'this' keyword indicates the class reference.
    }
}

const accounting = new Department('Accounting')
accounting.describe() // Output: Department: Accounting

const anotherAccounting = {
    name: 'Prince',
    describe: accounting.describe,
    anotherDescribe: accounting.anotherDescribe,
}
anotherAccounting.describe() // Output: Department: Prince
anotherAccounting.anotherDescribe() // Output: Department (anotherDescribe): Prince

// Compile using: 'tsc --target es6 app.ts' (By default, it's 'es5')

// Note: If I don't mention ~name: 'Prince'~, then 'anotherAccounting.describe()' will show 'Department: undefined'.
