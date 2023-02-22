"use strict";
exports.__esModule = true;
function createUser(user) {
    return user;
}
var val = createUser({
    name: 'RSP',
    email: 'RSP@gmail.com',
    isActive: false
});
console.log(val); // Output: { name: 'RSP', email: 'RSP@gmail.com', isActive: false }
var myUser = {
    _id: '12345',
    name: 'RSP',
    email: 'RSP@gmail.com',
    isActive: false
};
myUser.name = 'ABC';
var va = {
    cardNumber: 12,
    cardDate: '123',
    cvv: 12
};
console.log(va);
