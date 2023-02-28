class Department {
    private employees: string[] = [] // 'private'

    // This means:
    // private readonly id: string
    // public name: string
    constructor(private readonly id: string, public name: string) {} // I can't change the value of 'id' after initializing at first.

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

const accounting = new Department('D1', 'Accounting')
accounting.describe() // Output: Department: (D1: Accounting)

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printEmployeeInformation() // Output: 2 [ 'Max', 'Manu' ]
