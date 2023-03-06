// Type Guard: It's an idea or approach to checking if a certain property or method is existed before I try to use it.

// ---------------------------------------- Custom type --------------------------------------------
type Combinable = string | number

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        // This is called type guard
        return a.toString() + b.toString()
    }
    return a + b
}

type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

// ---------------------------------------- Object type --------------------------------------------
type UnknownEmployee = Admin | Employee
type ElevatedEmployee = Admin & Employee

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ', emp.name)
    if ('privileges' in emp) {
        // Type guard
        // Javascript syntax that allows me to check if 'privileges' is a property of 'emp' then return true.
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate)
    }
}

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
}

printEmployeeInformation(e1)
// Output:
// Name:  Max
// Privileges: create-server
// Start Date: Mon Mar 06 2023 08:34:48 GMT+0600 (Bangladesh Standard Time)

printEmployeeInformation({ name: 'Manu', startDate: new Date() })
// Output:
// Name:  Manu
// Start Date: Mon Mar 06 2023 08:35:42 GMT+0600 (Bangladesh Standard Time)

// ---------------------------------------- Class --------------------------------------------
class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo... ' + amount)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    // if ('loadCargo' in vehicle) { // Way: 01
    if (vehicle instanceof Truck) {
        // Type guard
        // Way: 02
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)
// Output:
// Driving...
// Driving a truck...
// Loading cargo... 1000
