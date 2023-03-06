// Type Guard: It's an idea
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        // This is called type guard
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ', emp.name);
    if ('privileges' in emp) {
        // Javascript syntax that allows me to check if 'privileges' is a property of 'emp' then return true.
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
var e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
printEmployeeInformation(e1);
// Output:
// Name:  Max
// Privileges: create-server
// Start Date: Mon Mar 06 2023 08:34:48 GMT+0600 (Bangladesh Standard Time)
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
// Output:
// Name:  Manu
// Start Date: Mon Mar 06 2023 08:35:42 GMT+0600 (Bangladesh Standard Time)
// ---------------------------------------- Class --------------------------------------------
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo... ' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
