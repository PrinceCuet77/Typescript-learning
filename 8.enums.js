"use strict";
exports.__esModule = true;
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
// If I 
var seat = 1;
if (seat == SeatChoice.MIDDLE) {
    console.log(SeatChoice.MIDDLE);
}
