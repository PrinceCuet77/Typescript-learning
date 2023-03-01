class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
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
// Inheritance ('ITDepartment' class get all the properties & methods from 'Department' class)
class ITDepartment extends Department {
    constructor(id, name, admins) {
        super(id, name, admins); // Must use that method and it calls the constructor of 'Department' class automatically.
        this.admins = admins;
    }
}
// const accounting = new Department('D1', 'Accounting')
const it = new ITDepartment('D1', 'IT', ['Max']); // I can use like that.
it.describe(); // Output: Department: (D1: IT)
it.addEmployee('Maximillan');
it.addEmployee('Manu');
it.printEmployeeInformation(); // Output: 2 [ 'Max', 'Manu' ]
