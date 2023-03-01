class Department {
    // 'protected' means I can't use this property outside the class but I can use inside another class which extends that class.
    constructor(private readonly id: string, public name: string, protected employees: string[]) {}

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
        super(id, name, admins) // Must use that method and it calls the constructor of 'Department' class automatically.
    }
}

// const accounting = new Department('D1', 'Accounting')
const it = new ITDepartment('D1', 'IT', ['Max']) // I can use like that.
it.describe() // Output: Department: (D1: IT)

it.addEmployee('Maximillan')
it.addEmployee('Manu')

it.printEmployeeInformation() // Output: 3 [ 'Max', 'Maximillan', 'Manu' ]

// But I can't use that 'employees' property outside the class.
// it.employees.push('Prince')