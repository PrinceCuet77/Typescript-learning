class Department {
    private employees: string[] = []

    constructor(private readonly id: string, public name: string) {}

    // I can combine line 02 & 04 and use like the following line (shorthand).
    // constructor(private readonly id: string, public name: string, private employees: string[]) {}

    describe() {
        console.log(`Department: (${this.id}: ${this.name})`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length, this.employees)
    }
}

// Inheritance ('ITDepartment' class get all the properties & methods from 'Department' class)
class ITDepartment extends Department {
    constructor(id: string, name: string, public admins: string[]) {
        super(id, name) // Must use that method and it calls the constructor of 'Department' class automatically.
    }
}

// const accounting = new Department('D1', 'Accounting')
const it = new ITDepartment('D1', 'IT', ['Max']) // I can use like that.
it.describe() // Output: Department: (D1: IT)

it.addEmployee('Max')
it.addEmployee('Manu')

it.printEmployeeInformation() // Output: 2 [ 'Max', 'Manu' ]
