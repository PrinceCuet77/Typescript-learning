"use strict";
exports.__esModule = true;
var score = 33;
// update
score = 44;
score = '55'; // Also allowed
var user = { name: 'RSP', id: 334 };
user = { username: 'RS', id: 334 };
// Using inside the function -----------------------
function getDBId(id) {
    // making some API calls
    console.log("DB id is: ".concat(id));
}
getDBId(3);
getDBId('4');
// ---------------------------- Array in union -----------------------------
var data = [1, 2, 3];
var data1 = ["1", "2", "3"];
var data3 = [1, 2]; // Only number array or Only string array but mixed is not allowed
var data4 = [1, "2", false]; // mixed is allowed in that syntax
// --------------------- Extra ---------------------
var pi = 3.14;
// pi = 3.33 // Can't change because I give it only one change to select.
// Same as:
var seatAllotment = 'Aisle';
console.log(seatAllotment);
