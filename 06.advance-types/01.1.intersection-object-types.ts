type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

// New type which contains both properties of 'Admin' and 'Employee'.
type ElevatedEmployee = Admin & Employee // Intersecting (Combining two types).

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
//   startDate: 2023-03-05T16:10:04.031Z
// }
