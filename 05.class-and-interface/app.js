class Department {
    // This means:
    // private readonly id: string
    // public name: string
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // 'private'
    } // I can't change the value of 'id' after initializing at first.
    describe() {
        console.log(`Department: (${this.id}: ${this.name})`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length, this.employees);
    }
}
const accounting = new Department('D1', 'Accounting');
accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation(); // Output: 2 [ 'Max', 'Manu' ]
