"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = 'Dhaka'; // Only 'readonly' is not allowed to change the value of the variable but private can't allow to access this outside the class.
        this.email = email;
        this.name = name;
    }
    return User;
}());
var user = new User('R@gmail.com', 'Rezoan');
// Professional person will do it like -
var Person = /** @class */ (function () {
    function Person(email, name) {
        this.email = email;
        this.name = name;
        this.city = 'CTG';
    }
    return Person;
}());
var person = new Person('S@gmail.com', 'Shakil');
