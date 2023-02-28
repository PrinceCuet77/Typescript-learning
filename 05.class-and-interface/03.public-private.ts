class Department {
    name: string // If I don't use any access modifier, then it's 'public'.
    private employees: string[] = [] // 'private'

    constructor(n: string) {
        this.name = n
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length, this.employees)
    }
}

const accounting = new Department('Accounting')

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printEmployeeInformation() // Output: 2 [ 'Max', 'Manu' ]
