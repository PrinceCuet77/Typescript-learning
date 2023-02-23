"use strict";
exports.__esModule = true;
// Order is matters in tuples
var user = ['Prince', 11209, false];
console.log(user); // Output: [ 'Prince', 11209, false ]
var myUser = [112, 'ABC'];
console.log(myUser); // Output: [ 112, 'ABC' ]
// Update tuple element
myUser[1] = 'RSP';
console.log(myUser); // Output: [ 112, 'RSP' ]
myUser[1].push(true);
