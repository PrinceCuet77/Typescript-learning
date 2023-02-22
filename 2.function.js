"use strict";
exports.__esModule = true;
// Function takes arguments and declares the last variable as default variable.
// Function returns the string which I mension in function return type.
function login(userId, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return 'Done';
}
var update = login('Prince', '123', true);
var update2 = login('Prince', '123'); // I can use as well because the last argument is default argument.
// Arrow function
var update3 = function (userId, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "".concat(userId, " ").concat(password, " ").concat(isPaid);
};
console.log(update3('P', '122345'));
// map function
var value = [1, 2, 3];
value.map(function (val) {
    return "The value is ".concat(val);
});
// 'void' return type
function hello(msg) {
    console.log("The message is ".concat(msg));
}
// 'never' return type use for handling the error
function handleError(err) {
    throw new Error(err);
}
