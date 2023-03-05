interface Admin {
    name: string
    privileges: string[]
}

interface Employee {
    name: string
    startDate: Date
}

// Extending both 'Admin' and 'Employee' is like combination of both interfaces.
interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
}

console.log(e1)
// Output:
// {
//   name: 'Max',
//   privileges: [ 'create-server' ],
//   startDate: 2023-03-05T16:13:21.497Z
// }
