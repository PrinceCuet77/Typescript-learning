"use strict";
exports.__esModule = true;
var score = [];
var names = [];
// Takes either 'boolean' or 'number' and return either 'boolean' or 'number'
function identityOne(val) {
    return val;
}
// Calling
console.log(identityOne(1)); // Output: 1
console.log(identityOne(false)); // Output: false
// Not a good practice
function identityTwo(val) {
    return val;
}
// using generics
function identityThree(val) {
    return val;
}
console.log(identityThree('Prince')); // Output: Prince
console.log(identityThree(4)); // Output: 4
// using generics shortcut
function identityFour(val) {
    return val;
}
identityFour({});
